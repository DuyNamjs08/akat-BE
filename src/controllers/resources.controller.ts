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
      const { user_id = '' } = data;
      const fanpage_count = await prisma.facebookPageInsights.count({
        where: {
          user_id: user_id,
        },
        orderBy: {
          created_at: 'desc',
        },
      });
      const fanpage_insight_data = await prisma.facebookPageInsights.findMany({
        where: {
          user_id: user_id,
        },
        orderBy: {
          created_at: 'desc',
        },
      });
      const totalInsightCounts = fanpage_insight_data.reduce(
        (acc, cur) => ({
          posts: acc.posts + (cur.posts || 0),
          approach: acc.approach + (cur.approach || 0),
          interactions: acc.interactions + (cur.interactions || 0),
          follows: acc.follows + (cur.follows || 0),
        }),
        { posts: 0, approach: 0, interactions: 0, follows: 0 },
      );
      successResponse(res, 'Thông tin tài nguyên', {
        fanpage_count,
        ...totalInsightCounts,
      });
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
};
export default ResourcesController;
