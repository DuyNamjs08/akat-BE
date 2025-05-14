import axios from 'axios';
import Bull from 'bull';
import prisma from '../config/prisma';
import FacebookGraphAdapter from '../constants/FacebookGraphAdapter';

export const facebookInsightQueue = new Bull('facebook-sync-insight', {
  redis: { port: 6379, host: 'localhost' },
  limiter: {
    max: 10, // tối đa 10 job
    duration: 1000, // mỗi 1000ms
  },
});
const fetchPostsCount = async (
  access_token: string,
  facebook_fanpage_id: string,
): Promise<number> => {
  let totalCount = 0;
  const today = Math.floor(Date.now() / 1000);
  const since = today - 28 * 24 * 60 * 60;
  let url = `https://graph.facebook.com/v22.0/${facebook_fanpage_id}/posts?fields=id,message,created_time,shares,likes.summary(true).limit(0),comments.summary(true).limit(0),full_picture,status_type&since=${since}&until=${today}&limit=10&access_token=${access_token}`;
  try {
    while (url) {
      const response = await axios.get(url);
      const data = response.data;
      if (data.error) throw new Error(data.error.message);
      url = data.paging?.next || '';
      totalCount += data.data.length;
    }
  } catch (error: any) {
    console.error('Error during Facebook post fetch:', error.message);
    throw error;
  }
  return totalCount;
};
const updateInsight = async (data: any) => {
  try {
    const nameAndImage = `https://graph.facebook.com/v22.0/${data?.facebook_fanpage_id}?fields=name,picture&access_token=${data?.access_token}`;
    const followersUrl = `https://graph.facebook.com/v22.0/${data?.facebook_fanpage_id}/insights?metric=page_daily_follows_unique&period=days_28&access_token=${data?.access_token}`;
    const postRemain = `https://graph.facebook.com/v22.0/${data?.facebook_fanpage_id}/insights?metric=page_impressions_unique,page_post_engagements&period=days_28&access_token=${data?.access_token}`;
    const categoryAndStatusPage = `https://graph.facebook.com/v22.0/${data?.facebook_fanpage_id}?fields=category%2Cis_published&access_token=${data?.access_token}`;
    const postsCount = await fetchPostsCount(
      data?.access_token,
      data?.facebook_fanpage_id,
    );
    console.log('postsCount', postsCount);
    const [nameImageRes, followersRes, postRemainRes, categoryAndStatusRes] =
      await Promise.all([
        axios.get(nameAndImage),
        axios.get(followersUrl),
        axios.get(postRemain),
        axios.get(categoryAndStatusPage),
      ]);
    await prisma.facebookPageInsights.update({
      where: {
        id: data.id as string,
      },
      data: {
        posts: postsCount,
        approach: FacebookGraphAdapter.transformPostRemain(postRemainRes?.data)
          .impressions,
        interactions: FacebookGraphAdapter.transformPostRemain(
          postRemainRes?.data,
        ).engagements,
        follows:
          FacebookGraphAdapter.transformFollowers(followersRes.data)
            ?.followersCount || 0,
        name: nameImageRes?.data?.name || '',
        image_url: nameImageRes?.data?.picture?.data?.url || '',
        category: FacebookGraphAdapter.transformCategoryAndStatusPage(
          categoryAndStatusRes?.data,
        ).category,
        status: FacebookGraphAdapter.transformCategoryAndStatusPage(
          categoryAndStatusRes?.data,
        ).isPublished,
      },
    });
  } catch (error: any) {
    console.error('Lỗi khi đồng bộ dữ liệu hàng giờ !!!', {
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data,
    });
    const repeatableJobs = await facebookInsightQueue.getRepeatableJobs();
    const targetJob = repeatableJobs.find((job) => job.id === data?.id);
    if (targetJob) {
      await facebookInsightQueue.removeRepeatableByKey(targetJob.key);
      console.log('Repeatable job removed.');
    } else {
      console.log('Job not found.');
    }
  }
};

// Xử lý job trong queue
facebookInsightQueue.process(5, async (job) => {
  const { data } = job;
  console.log('data-repeate', data);
  const res = await updateInsight(data);

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(`Cập nhật facebook insight của ${data?.id} successed!`);
        resolve('Facebook sync completed');
      } catch (error) {
        reject(error);
      }
    }, 0);
  });
});
