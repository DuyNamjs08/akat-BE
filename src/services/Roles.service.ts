import prisma from '../config/prisma';

class RoleService {
  async createRole(name: string) {
    const role = await prisma.role.create({
      data: {
        name: name,
      },
    });
    return role;
  }
  async getAllRoles() {
    return await prisma.role.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async getRoleById(id: string) {
    const role = await prisma.role.findUnique({
      where: { id },
    });
    return role;
  }
  async getRoleByName(name: string) {
    const role = await prisma.role.findUnique({
      where: { name },
    });
    return role;
  }

  async updateRole(id: string, updateData: any) {
    const role = await prisma.role.update({
      where: { id },
      data: updateData,
    });
    return role;
  }

  async deleteRole(id: string) {
    const role = await prisma.role.delete({
      where: { id },
    });
    return role;
  }
}

export default new RoleService();
