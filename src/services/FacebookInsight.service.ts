import prisma from '../config/prisma';
class FacebookInsightService {
  async createFacebookInsight(data: any) {
    const FacebookInsight = await prisma.facebookPageInsights.create({
      data,
    });
    return FacebookInsight;
  }
  async getAllFacebookInsights() {
    return await prisma.facebookPageInsights.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async getFacebookInsightById(id: string) {
    const FacebookInsight = await prisma.facebookPageInsights.findUnique({
      where: { id },
    });
    return FacebookInsight;
  }
  async getFacebookInsightByFacebookFanpageId(
    facebook_fanpage_id: string,
    user_id: string,
  ) {
    const FacebookConnection = await prisma.facebookPageInsights.findFirst({
      where: { facebook_fanpage_id, user_id },
    });
    return FacebookConnection;
  }
  async updateFacebookInsight(id: string, data: any) {
    const FacebookInsight = await prisma.facebookPageInsights.update({
      where: { id },
      data,
    });
    return FacebookInsight;
  }

  async deleteFacebookInsight(id: string) {
    const FacebookInsight = await prisma.facebookPageInsights.delete({
      where: { id },
    });
    return FacebookInsight;
  }
}

export default new FacebookInsightService();
