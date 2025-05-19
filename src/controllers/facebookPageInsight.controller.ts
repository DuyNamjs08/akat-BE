import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookInsightService from '../services/FacebookInsight.service';
import { facebookInsightQueue } from '../workers/facebook-repeate.worker';
import prisma from '../config/prisma';

interface InsightQuery {
  user_id: string;
  query: string;
}

const FacebookInsightController = {
  createFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const connections =
        await FacebookInsightService.getFacebookInsightByFacebookFanpageId(
          req.body.facebook_fanpage_id,
          req.body.user_id,
        );
      if (connections) {
        const FacebookInsightNew =
          await FacebookInsightService.updateFacebookInsight(
            connections.id,
            req.body,
          );
        successResponse(
          res,
          'Cập nhật facebook page insight thành công !',
          FacebookInsightNew,
        );
        return;
      }
      const data = req.body;
      const response = await FacebookInsightService.createFacebookInsight(data);
      successResponse(res, 'Tạo facebook page insight thành công!', response);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  asyncFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id = '', facebook_fanpage_id = '', access_token = '' } = req.body;
      if (!id || !facebook_fanpage_id || !access_token) {
        errorResponse(
          res,
          'Thiếu thông tin bắt buộc asyncFacebookInsight',
          {},
          httpStatusCodes.BAD_REQUEST,
        );
        return;
      }
      const repeatableJobs = await facebookInsightQueue.getRepeatableJobs();
      const targetJob = repeatableJobs.find((job) => job.id === id);
      if (targetJob) {
        await facebookInsightQueue.removeRepeatableByKey(targetJob.key);
        console.log('job tồn tại, đã xóa job cũ');
      } else {
        console.log('Job không tìm thấy.');
      }
      await facebookInsightQueue.add(
        { id, facebook_fanpage_id, access_token },
        {
          jobId: id,
          repeat: { every: 30 * 60 * 1000 },
          removeOnComplete: true,
          removeOnFail: true,
        },
      );
      successResponse(
        res,
        'Đồng bộ dữ liệu facebook page insight thành công!',
        {
          async: true,
        },
      );
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  getAllFacebookInsights: async (
    req: Request<InsightQuery>,
    res: Response,
  ): Promise<void> => {
    try {
      const { user_id, query, page = '1', pageSize = '10' } = req.query;

      const pageNum = Number(page) || 1;
      const pageSizeNum = Number(pageSize) || 10;
      const skip = (pageNum - 1) * pageSizeNum;

      let whereClause: any = { user_id };

      if (query) {
        whereClause.OR = [
          { name: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ];
      }

      const totalCount = await prisma.facebookPageInsights.count({
        where: whereClause,
      });

      const FacebookPages = await prisma.facebookPageInsights.findMany({
        where: whereClause,
        orderBy: {
          created_at: 'desc',
        },
        skip,
        take: pageSizeNum,
      });

      successResponse(res, 'Danh sách facebook pages', {
        totalCount,
        data: FacebookPages,
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

  getFacebookInsightById: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookInsight =
        await FacebookInsightService.getFacebookInsightById(req.params.id);
      successResponse(res, 'Success', FacebookInsight);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  getFacebookInsightByUseridAndFanpageid: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const { user_id = '', facebook_fanpage_id = '' } = req.body;
      if (!user_id || !facebook_fanpage_id) {
        errorResponse(
          res,
          'Thiếu thông tin getFacebookInsightByUseridAndFanpageid',
          {},
          httpStatusCodes.BAD_REQUEST,
        );
        return;
      }
      const FacebookInsight =
        await FacebookInsightService.getFacebookInsightByFacebookFanpageId(
          facebook_fanpage_id as string,
          user_id as string,
        );
      successResponse(res, 'Success', FacebookInsight);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookInsight =
        await FacebookInsightService.getFacebookInsightById(req.params.id);
      if (!FacebookInsight) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookInsightNew =
        await FacebookInsightService.updateFacebookInsight(
          req.params.id,
          req.body,
        );
      successResponse(
        res,
        'Cập nhật facebook page insight thành công !',
        FacebookInsightNew,
      );
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },

  deleteFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookInsight =
        await FacebookInsightService.getFacebookInsightById(req.params.id);
      if (!FacebookInsight) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      await FacebookInsightService.deleteFacebookInsight(req.params.id);
      successResponse(
        res,
        'Xóa facebook page insight thành công !',
        FacebookInsight,
      );
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },

  deleteFacebookInsightWithConnection: async (req: Request, res: Response) => {
    try {
      const pageInsights =
        await FacebookInsightService.getFacebookInsightByFacebookFanpageId(
          req.body.facebook_fanpage_id,
          req.body.user_id,
        );

      if (pageInsights?.id) {
        await FacebookInsightService.deleteFacebookInsight(pageInsights.id);
      } else {
        throw new Error('Không tìm thấy Facebook Page Insight với id hợp lệ');
      }

      successResponse(
        res,
        'Xóa facebook page insight thành công !',
        pageInsights,
      );
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
export default FacebookInsightController;
