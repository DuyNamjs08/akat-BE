import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import prisma from '../config/prisma';

const ResourcesController = {
  createAndUpdateResource: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const data = req.body;
      const fanpage_count = await prisma.facebookFanPage.count({
        where: data,
        orderBy: {
          created_at: 'desc',
        },
      });
      const fanpage_data = await prisma.facebookFanPage.findMany({
        where: data,
        orderBy: {
          created_at: 'desc',
        },
      });
      const totalCounts = fanpage_data.reduce(
        (acc, cur) => ({
          follower_count: acc.follower_count + (cur.follower_count || 0),
          fan_count: acc.fan_count + (cur.fan_count || 0),
        }),
        { follower_count: 0, fan_count: 0 },
      );
      console.log('totalCounts', totalCounts);
      successResponse(res, 'Thông tin tài nguyên', {
        fanpage_count,
        ...totalCounts,
      });
    } catch (error) {
      errorResponse(
        res,
        'Internet server error',
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
};
export default ResourcesController;
