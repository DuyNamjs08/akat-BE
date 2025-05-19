import Bull from 'bull';
import facebookPostModel from '../models/FacebookPost.model';

export const fbRealtimeUpdate = new Bull('fb-realtime-update', {
  redis: { port: 6379, host: 'localhost' },
  limiter: {
    max: 50, // tối đa 10 job
    duration: 1000, // mỗi 1000ms
  },
});
const updateDb = async (data: any) => {
  try {
    const { post_id, parent_id, verb, reaction_type, item } = data;
    //   Phần cập nhật lại like
    if (
      post_id === parent_id &&
      (verb === 'add' || verb === 'remove') &&
      reaction_type === 'like'
    ) {
      const incValue = verb === 'add' ? 1 : verb === 'remove' ? -1 : 0;
      await facebookPostModel.updateOne(
        { facebook_post_id: post_id },
        {
          $inc: { likes: incValue },
          $set: { updated_at: new Date() },
          $setOnInsert: { created_at: new Date() },
        },
        { upsert: true },
      );
      // Đảm bảo like_count không âm
      await facebookPostModel.updateOne(
        { facebook_post_id: post_id, likes: { $lt: 0 } },
        { $set: { likes: 0, updated_at: new Date() } },
      );
    }
    //   phần cập nhật lại comment
    if (
      post_id === parent_id &&
      (verb === 'add' || verb === 'remove') &&
      item === 'comment'
    ) {
      const incValue = verb === 'add' ? 1 : verb === 'remove' ? -1 : 0;
      await facebookPostModel.updateOne(
        { facebook_post_id: post_id },
        {
          $inc: { comments: incValue },
          $set: { updated_at: new Date() },
          $setOnInsert: { created_at: new Date() },
        },
        { upsert: true },
      );
      // Đảm bảo like_count không âm
      await facebookPostModel.updateOne(
        { facebook_post_id: post_id, comments: { $lt: 0 } },
        { $set: { comments: 0, updated_at: new Date() } },
      );
    }
    return true;
  } catch (error) {
    console.error('Update DB error:', error);
    throw error;
  }
};
fbRealtimeUpdate.process(15, async (job) => {
  const { data } = job;
  try {
    console.log('data', data);
    const res = await updateDb(data);
    console.log(`✅ Cập nhật thành công bài post: ${data?.post_id}`);
    return res;
  } catch (err) {
    console.error(`❌ Lỗi khi cập nhật bài post ${data?.post_id}:`, err);
    throw err;
  }
});
