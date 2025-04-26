import prisma from '../config/prisma';
class UserService {
  async createUser({
    email,
    password,
  }: {
    email: string;
    password: string;
    role_id: string;
  }) {
    const User = await prisma.user.create({
      data: {
        email,
        password,
        role_id: '8818feb9-7856-4f11-9023-fc161d394aa4',
      },
    });
    return User;
  }
  async getAllUsers() {
    return await prisma.user.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async getUserById(id: string) {
    const User = await prisma.user.findUnique({
      where: { id },
    });
    return User;
  }
  async getUserByEmail(email: string) {
    const User = await prisma.user.findUnique({
      where: { email },
    });
    return User;
  }

  async updateUser(id: string, updateData: any) {
    const User = await prisma.user.update({
      where: { id },
      data: updateData,
    });
    return User;
  }

  async deleteUser(id: string) {
    const User = await prisma.user.delete({
      where: { id },
    });
    return User;
  }
}

export default new UserService();
