import prisma from '../config/prisma';
import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';

export const getAllFacebookPosts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // const posts = await prisma.facebookPost.findMany();
    successResponse(res, 'get-alll', {});
  } catch (error) {
    console.error('Error fetching Facebook posts:', error);
    errorResponse(res, 'Internet server error', error, 500);
  }
};

export const createFacebookPost = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // const newPost = await prisma.facebookPost.create({
    //   data: { content },
    // });
    successResponse(res, 'create-alll', {});
  } catch (error) {
    console.error('Error creating Facebook post:', error);
    errorResponse(res, 'Internet server error', error, 500);
  }
};
