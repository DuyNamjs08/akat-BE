import prisma from '../config/prisma';
class FacebookFanPageService {
  async createFacebookFanPage(data: any) {
    const FacebookFanPage = await prisma.facebookFanPage.create({
      data,
    });
    return FacebookFanPage;
  }
  async getAllFacebookFanPages() {
    return await prisma.facebookFanPage.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async getFacebookFanPageById(id: string) {
    const FacebookFanPage = await prisma.facebookFanPage.findUnique({
      where: { id },
    });
    return FacebookFanPage;
  }
  async updateFacebookFanPage(id: string, data: any) {
    const FacebookFanPage = await prisma.facebookFanPage.update({
      where: { id },
      data,
    });
    return FacebookFanPage;
  }

  async deleteFacebookFanPage(id: string) {
    const FacebookFanPage = await prisma.facebookFanPage.delete({
      where: { id },
    });
    return FacebookFanPage;
  }
}

export default new FacebookFanPageService();
