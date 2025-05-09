import {
  FacebookFollowers,
  FacebookInsights,
  FacebookPageCategoryStatus,
  FacebookPageNameAndImage,
} from './FacebookGraphInterface';

class FacebookGraphAdapter {
  /**
   * Chuyển đổi response từ endpoint nameAndImage
   */
  public static transformNameAndImage(rawData: any): FacebookPageNameAndImage {
    if (!rawData || !rawData.id || !rawData.name) {
      throw new Error('Dữ liệu trả về từ nameAndImage không hợp lệ');
    }
    const pictureUrl = rawData.picture?.data?.url || ''; // Nếu không có, trả về chuỗi rỗng hoặc xử lý theo yêu cầu.

    return {
      id: rawData.id,
      name: rawData.name,
      pictureUrl,
    };
  }

  /**
   * Chuyển đổi response từ endpoint followersUrl
   */
  public static transformFollowers(rawData: any): FacebookFollowers {
    let followersCount = 0;
    if (rawData && Array.isArray(rawData.data) && rawData.data.length > 0) {
      const metric = rawData.data[0]; // Giả sử chỉ có một metric: page_daily_follows_unique
      if (
        metric.values &&
        Array.isArray(metric.values) &&
        metric.values.length > 0
      ) {
        // Lấy giá trị mới nhất
        const latestValue = metric.values[metric.values.length - 1];
        followersCount = latestValue.value;
      }
    }
    return { followersCount };
  }

  /**
   * Chuyển đổi response từ endpoint postsUrl
   */
  // public static transformPosts(rawData: any): FacebookPost[] {
  //     if (!rawData || !Array.isArray(rawData.data)) {
  //         return [];
  //     }
  //     // Ví dụ: chuyển đổi từng item trong danh sách posts
  //     return rawData.data.map((post: any) => ({
  //         id: post.id,
  //         message: post.message || "",
  //         created_time: post.created_time,
  //     }));
  // }

  /**
   * Chuyển đổi response từ endpoint postRemain (insights: impressions & engagements)
   */
  public static transformPostRemain(rawData: any): FacebookInsights {
    const insights: FacebookInsights = {
      impressions: 0,
      engagements: 0,
    };
    if (rawData && Array.isArray(rawData.data)) {
      rawData.data.forEach((metric: any) => {
        if (
          metric.name === 'page_impressions_unique' &&
          Array.isArray(metric.values) &&
          metric.values.length > 0
        ) {
          const latest = metric.values[metric.values.length - 1];
          insights.impressions = latest.value;
        }
        if (
          metric.name === 'page_post_engagements' &&
          Array.isArray(metric.values) &&
          metric.values.length > 0
        ) {
          const latest = metric.values[metric.values.length - 1];
          insights.engagements = latest.value;
        }
      });
    }
    return insights;
  }

  /**
   * Chuyển đổi response từ endpoint categoryAndStatusPage
   */
  public static transformCategoryAndStatusPage(
    rawData: any,
  ): FacebookPageCategoryStatus {
    if (!rawData) {
      throw new Error('Dữ liệu trả về từ categoryAndStatusPage không hợp lệ');
    }
    return {
      category: rawData.category || '',
      isPublished: rawData.is_published ? 'Hoạt động' : 'Không hoạt động',
    };
  }
}

export default FacebookGraphAdapter;
