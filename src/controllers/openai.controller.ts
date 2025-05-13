import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import prisma from '../config/prisma';
import { openAi } from '../config/openAi';
export async function moderateContent(content: string): Promise<any> {
  const promptdemo = `
  You are a content moderation system for Facebook posts. Your task is to analyze the content of posts and determine if they violate community standards.

  Analyze the post for the following violations:
  1. Hate speech or discrimination
  2. Violence or threats
  3. Nudity or sexual content
  4. Harassment or bullying
  5. Spam or misleading content
  6. Illegal activities
  7. Self-harm or suicide
  8. Misinformation

  Respond with a JSON object in the following format:
  {
    "violates": boolean,
    "category": string or null,
    "reason": string or null,
    "confidence": number in (0,1;1)
  }

  Where:
  - "violates" is true if the post violates community standards, false otherwise
  - "category" is the category of violation (one of the 8 listed above), or null if no violation
  - "reason" is a brief explanation of why the post violates standards, or null if no violation
  - "confidence" is your confidence level in the assessment (0.0 to 1.0)

  Be thorough but fair in your assessment. If you are unsure, err on the side of caution.

  Post content: "${content}"
  `;
  const config = await prisma.moderationSetting.findFirst({
    where: {
      name: 'moderationConfig',
    },
  });
  const prompt = config?.prompt || '';
  const response = await openAi.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt + `Content: ${content}` }],
    max_tokens: 150,
  });

  const result = JSON.parse(response.choices[0].message.content as string);
  return result;
}
const openAiController = {
  processPost: async (req: Request, res: Response): Promise<void> => {
    try {
      const { content } = req.body;
      if (!content) {
        errorResponse(
          res,
          httpReasonCodes.BAD_REQUEST,
          'Nội dung không được để trống',
          httpStatusCodes.BAD_REQUEST,
        );
        return;
      }
      const config = await prisma.moderationSetting.findFirst({
        where: {
          name: 'moderationConfig',
        },
      });
      if (!config) {
        errorResponse(
          res,
          httpReasonCodes.BAD_REQUEST,
          'Cấu hình không tồn tại',
          httpStatusCodes.BAD_REQUEST,
        );
        return;
      }
      const result = await moderateContent(content);
      console.log('result', result);

      successResponse(res, 'Thông tin tài nguyên', result);
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
export default openAiController;
