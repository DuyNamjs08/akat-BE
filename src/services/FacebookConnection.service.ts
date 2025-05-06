import prisma from '../config/prisma';
class FacebookConnectionService {
  async createFacebookConnection(data: any) {
    const FacebookConnection = await prisma.facebookConnections.create({
      data,
    });
    return FacebookConnection;
  }
  async getAllFacebookConnections(data: any) {
    return await prisma.facebookConnections.findMany({
      where: data,
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async getFacebookConnectionById(id: string) {
    const FacebookConnection = await prisma.facebookConnections.findUnique({
      where: { id },
    });
    return FacebookConnection;
  }
  async getFacebookConnectionByFacebookFanpageId(
    facebook_fanpage_id: string,
    user_id: string,
  ) {
    const FacebookConnection = await prisma.facebookConnections.findFirst({
      where: { facebook_fanpage_id, user_id },
    });
    return FacebookConnection;
  }
  async updateFacebookConnection(id: string, data: any) {
    const FacebookConnection = await prisma.facebookConnections.update({
      where: { id },
      data,
    });
    return FacebookConnection;
  }

  async deleteFacebookConnection(id: string) {
    const FacebookConnection = await prisma.facebookConnections.delete({
      where: { id },
    });
    return FacebookConnection;
  }
}

export default new FacebookConnectionService();
