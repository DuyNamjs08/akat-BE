import prisma from '../config/prisma';
class FacebookPostService {
  async createFacebookPost(data: any) {
    const FacebookPost = await prisma.facebookPost.create({
      data,
    });
    return FacebookPost;
  }
  async createManyFacebookPost(data: any) {
    const FacebookManyPost = await prisma.facebookPost.createMany({
      data,
    });
    return FacebookManyPost;
  }
  async updateManyFacebookPost(data: any) {
    const FacebookManyPost = await prisma.facebookPost.updateMany({
      data,
    });
    return FacebookManyPost;
  }
  async getAllFacebookPosts(data: any) {
    return await prisma.facebookPost.findMany({
      where: data,
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async getFacebookPostById(id: string) {
    const FacebookPost = await prisma.facebookPost.findUnique({
      where: { id },
    });
    return FacebookPost;
  }
  async getFacebookPostByFacebookFanpageId(facebook_fanpage_id: string) {
    const FacebookPost = await prisma.facebookPost.findFirst({
      where: { facebook_fanpage_id },
    });
    return FacebookPost;
  }
  async updateFacebookPost(id: string, data: any) {
    const FacebookPost = await prisma.facebookPost.update({
      where: { id },
      data,
    });
    return FacebookPost;
  }

  async deleteFacebookPost(id: string) {
    const FacebookPost = await prisma.facebookPost.delete({
      where: { id },
    });
    return FacebookPost;
  }
}

export default new FacebookPostService();
