import prisma from '../config/prisma';
class FacebookScheduleService {
  async createFacebookSchedule(data: any) {
    const FacebookSchedule = await prisma.facebookPostDraft.create({
      data,
    });
    return FacebookSchedule;
  }
  async getAllFacebookSchedules() {
    return await prisma.facebookPostDraft.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  async getFacebookScheduleById(id: string) {
    const FacebookSchedule = await prisma.facebookPostDraft.findUnique({
      where: { id },
    });
    return FacebookSchedule;
  }
  async updateFacebookSchedule(id: string, data: any) {
    const FacebookSchedule = await prisma.facebookPostDraft.update({
      where: { id },
      data,
    });
    return FacebookSchedule;
  }

  async deleteFacebookSchedule(id: string) {
    const FacebookSchedule = await prisma.facebookPostDraft.delete({
      where: { id },
    });
    return FacebookSchedule;
  }
}

export default new FacebookScheduleService();
