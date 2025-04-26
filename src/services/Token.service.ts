import prisma from '../config/prisma';
class TokenService {
  async createtoken({ data }: any) {
    const res = await prisma.token.create({
      data: data,
      include: {
        user: true,
      },
    });
    return res;
  }
  async updateAccessToken(user_id: string, updateData: any) {
    const token = await prisma.token.update({
      where: { user_id },
      data: updateData,
    });
    return token;
  }
}
export default new TokenService();
