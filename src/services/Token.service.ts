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
  async findTokenByUserId(data: any) {
    const res = await prisma.token.findUnique({
      where: { user_id: data.user_id },
    });
    return res;
  }
  async updateAccessToken(user_id: string, updateData: any) {
    const token = await prisma.token.update({
      where: { user_id },
      data: updateData,
      include: {
        user: true,
      },
    });
    return token;
  }
}
export default new TokenService();
