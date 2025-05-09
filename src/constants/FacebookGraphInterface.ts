// Dữ liệu từ endpoint nameAndImage
export interface FacebookPageNameAndImage {
  id: string;
  name: string;
  pictureUrl: string;
}

// Dữ liệu của Insights followers
export interface FacebookFollowers {
  followersCount: number;
}

// Một bài post cơ bản
// export interface FacebookPost {
//     id: string;
//     message?: string;
//     created_time: string;
// }

// Dữ liệu từ insights cho impressions và engagements
export interface FacebookInsights {
  impressions: number;
  engagements: number;
}

// Dữ liệu của Category và Status của page
export interface FacebookPageCategoryStatus {
  category: string;
  isPublished: string;
}
