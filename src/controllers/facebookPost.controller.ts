import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookPostService from '../services/FacebookPost.service';
import FacebookFanPageService from '../services/FacebookFanPage.service';
import prisma from '../config/prisma';
import { ChangeText, FBPostQueue } from '../workers/facebook-post.worker';
import SynchronizeModel from '../models/Synchronize.model';
import { openAi } from '../config/openAi';
import Document from '../models/document.model';
import facebookPostModel from '../models/FacebookPost.model';
import { add } from 'date-fns';

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
      let query: any = {};
      if (facebook_fanpage_id) {
        // Nếu facebook_fanpage_id là mảng hoặc chuỗi, ta xử lý để query $in
        if (Array.isArray(facebook_fanpage_id)) {
          query.facebook_fanpage_id = { $in: facebook_fanpage_id };
        } else {
          query.facebook_fanpage_id = facebook_fanpage_id;
        }
      }
      if (content) {
        query.content = { $regex: content, $options: 'i' };
      }
      const totalCount = await facebookPostModel.countDocuments(query);
      const FacebookPosts = await facebookPostModel
        .find(query)
        .sort({ posted_at: -1 })
        .skip(skip)
        .limit(Number(pageSize));

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
    if (!exist) {
      const newSync = await SynchronizeModel.create({
        user_id: [user_id],
        facebook_fanpage_id: [page_id],
      });
      newSync.save();
      FBPostQueue.add(
        {
          token,
          page_id,
          page_name,
          page_category,
          synchronize: true,
          user_id,
        },
        {
          delay: 1000, // Thời gian delay giữa các job
          attempts: 3, // Thử lại nếu lỗi
          removeOnComplete: true,
          removeOnFail: true,
        },
      );
      const repeatableJobs = await FBPostQueue.getRepeatableJobs();
      const targetJob = repeatableJobs.find(
        (job) => job.id === `repeat_${user_id}_${page_id}`,
      );
      if (targetJob) {
        await FBPostQueue.removeRepeatableByKey(targetJob.key);
        console.log('FBPostQueue tồn tại, đã xóa job post cũ');
      } else {
        console.log('FBPostQueue không tìm thấy.');
      }
      await FBPostQueue.add(
        {
          token,
          page_id,
          page_name,
          page_category,
          synchronize: false,
          user_id,
        },
        {
          repeat: {
            every: 30 * 60 * 1000,
            startDate: add(new Date(), { hours: 1 }),
          },
          jobId: `repeat_${user_id}_${page_id}`,
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
      { token, page_id, page_name, page_category, synchronize: false, user_id },
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
async function getEmbedding(text: string) {
  const res = await openAi.embeddings.create({
    input: text,
    model: 'text-embedding-3-small',
    encoding_format: 'float',
  });
  const embedding = res.data[0].embedding;
  return embedding;
}
export const generatePostFBMongo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { question = '', facebook_fanpage_id = '' } = req.body;
  try {
    if (!question || !facebook_fanpage_id) {
      errorResponse(res, 'Missing required fields', null, 400);
      return;
    }
    const embedding = await getEmbedding(question);
    const resultsList = await Document.aggregate([
      {
        $vectorSearch: {
          index: 'default', // Tên index bạn đã tạo
          path: 'embedding',
          queryVector: embedding,
          numCandidates: 30,
          limit: 3,
        },
      },
      {
        $match: {
          facebook_fanpage_id: facebook_fanpage_id,
        },
      },
      {
        $project: {
          content: 1,
          score: { $meta: 'vectorSearchScore' },
        },
      },
    ]);
    const contextText = resultsList
      .map((post, i) => `• ${post.content}`)
      .join('\n');
    console.log('contextText', contextText);
    // Gọi OpenAI API để tạo nội dung
    const promptContent = `
Bạn là một chuyên gia viết nội dung cho mạng xã hội.
Hãy viết một bài đăng cho Facebook dựa trên một số ví dụ bài viết trước đó.:
Gợi ý: ${contextText}
Câu hỏi: ${question}

Hãy viết ra 3 phiên bản **khác nhau** của một bài đăng Facebook hấp dẫn dựa trên các gợi ý trên.

Yêu cầu:
- Mỗi bài viết cần rõ ràng, có call-to-action và hashtag phù hợp.
- Không viết lời giải thích.
- Mỗi bài viết bắt đầu bằng: "Bài viết 1:", "Bài viết 2:", "Bài viết 3:".`;
    const completion = await openAi.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Bạn là chuyên gia viết content mạng xã hội.',
        },
        { role: 'user', content: promptContent },
      ],
      temperature: 0.8,
      max_tokens: 1000,
      top_p: 1,
    });
    const result = completion.choices[0]?.message?.content;
    const posts = result
      ? result
          .split(/Bài viết \d+:/i)
          .map((s) => s.replace(/^\*+|\*+$/g, '').trim())
          .filter((s) => s.length > 0)
      : [];
    successResponse(res, 'Success', {
      message: 'Gen AI thành công',
      posts,
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
