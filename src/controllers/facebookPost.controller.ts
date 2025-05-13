import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookPostService from '../services/FacebookPost.service';
import FacebookFanPageService from '../services/FacebookFanPage.service';
import prisma from '../config/prisma';
import { FBPostQueue } from '../workers/facebook-post.worker';
import SynchronizeModel from '../models/Synchronize.model';

const FacebookPostController = {
  createAndUpdateFacebookPost: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const postsData = req.body;
      const BATCH_SIZE = 10;
      if (!Array.isArray(postsData)) {
        errorResponse(res, 'Request body must be an array', null, 400);
        return;
      }
      let results: any[] = [];
      // Chia thành các batch nhỏ
      for (let i = 0; i < postsData.length; i += BATCH_SIZE) {
        const batch = postsData.slice(i, i + BATCH_SIZE);
        await prisma.$transaction(async (tx) => {
          const existingPosts = await tx.facebookPost.findMany({
            where: {
              id: {
                in: batch.map((p) => p.id).filter(Boolean),
              },
            },
          });

          const existingIds = existingPosts.map((p) => p.id);
          const toUpdate = batch.filter((p) => existingIds.includes(p.id));
          const toCreate = batch.filter((p) => !existingIds.includes(p.id));

          const [created, updated] = await Promise.all([
            toCreate.length > 0
              ? tx.facebookPost.createMany({ data: toCreate })
              : Promise.resolve({ count: 0 }),
            toUpdate.length > 0
              ? Promise.all(
                  toUpdate.map((p) =>
                    tx.facebookPost.update({
                      where: { id: p.id },
                      data: p,
                    }),
                  ),
                )
              : Promise.resolve([]),
          ]);

          results.push({
            created: created.count || 0,
            updated: updated.length || 0,
          });
        });
      }
      successResponse(res, 'Processed batch upsert successfully', {
        totalProcessed: postsData.length,
        batches: results,
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
  getAllFacebookPosts: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.query;
      const { facebook_fanpage_id, content } = req.body;
      const { pageSize = 10, page = 1 } = data;
      const skip = (Number(page) - 1) * Number(pageSize);
      let whereClause: any = {
        facebook_fanpage_id: {
          in: facebook_fanpage_id,
        },
      };
      if (content) {
        whereClause.content = {
          contains: content,
          mode: 'insensitive',
        };
      }
      const totalCount = await prisma.facebookPost.count({
        where: whereClause,
      });
      const FacebookPosts = await prisma.facebookPost.findMany({
        where: whereClause,
        orderBy: {
          created_at: 'desc',
        },
        skip,
        take: pageSize ? Number(pageSize) : 10,
      });
      successResponse(res, 'Danh sách facebook Posts', {
        totalCount,
        data: FacebookPosts,
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

  getFacebookPostById: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookPost = await FacebookPostService.getFacebookPostById(
        req.params.id,
      );
      successResponse(res, 'Success', FacebookPost);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateFacebookPost: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookPost = await FacebookPostService.getFacebookPostById(
        req.params.id,
      );
      if (!FacebookPost) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookFanPage =
        await FacebookFanPageService.getFacebookFanPageById(
          req.body.facebook_fanpage_id,
        );
      if (!FacebookFanPage) {
        errorResponse(
          res,
          'Không tìm thấy Fanpage',
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookPostNew = await FacebookPostService.updateFacebookPost(
        req.params.id,
        req.body,
      );
      successResponse(
        res,
        'Cập nhật facebook Posts thành công !',
        FacebookPostNew,
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

  deleteFacebookPost: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookPost = await FacebookPostService.getFacebookPostById(
        req.params.id,
      );
      if (!FacebookPost) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      await FacebookPostService.deleteFacebookPost(req.params.id);
      successResponse(res, 'Xóa facebook Posts thành công !', FacebookPost);
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },
};

export const createPostFBMongo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { token, page_id, page_name, user_id, page_category } = req.body;
  try {
    if (!token || !page_id || !page_name || !user_id || !page_category) {
      errorResponse(res, 'Missing required fields', null, 400);
      return;
    }
    const exist = await SynchronizeModel.findOne({
      user_id: user_id,
      facebook_fanpage_id: page_id,
    });
    // const openAiVectorStoreFiles = await openAi.vectorStores.list();

    // console.log(openAiVectorStoreFiles);
    if (!exist) {
      const newSync = await SynchronizeModel.create({
        user_id: [user_id],
        facebook_fanpage_id: [page_id],
      });
      newSync.save();
      FBPostQueue.add(
        { token, page_id, page_name, page_category, synchronize: true },
        {
          delay: 1000, // Thời gian delay giữa các job
          attempts: 3, // Thử lại nếu lỗi
          removeOnComplete: true,
          removeOnFail: true,
        },
      );
      successResponse(res, 'Success', {
        message: 'Dữ liệu đã gửi vào queue',
      });
      return;
    }
    FBPostQueue.add(
      { token, page_id, page_name, page_category, synchronize: false },
      {
        delay: 1000, // Thời gian delay giữa các job
        attempts: 3, // Thử lại nếu lỗi
        removeOnComplete: true,
        removeOnFail: true,
      },
    );
    successResponse(res, 'Success', {
      message: 'Dữ liệu đã đồng bộ !!',
    });
  } catch (error: any) {
    errorResponse(
      res,
      error?.message,
      error,
      httpStatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};
export default FacebookPostController;
