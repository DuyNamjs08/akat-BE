import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import { errorResponse, successResponse } from '../helpers/response';
import { httpStatusCodes } from '../helpers/statusCodes';
import { MailsModel } from '../models/Mailer.model';

export const sendEmail = async (data: any) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: data.subject,
    text: data?.message,
  };
  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const createMailsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const data = req.body;
    const result = await MailsModel.create(data);
    await sendEmail(data);
    successResponse(res, 'Gửi mail success!', result);
  } catch (error: any) {
    errorResponse(
      res,
      error?.message,
      error,
      httpStatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};
export const getMailsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const Mails = await MailsModel.find({});
    successResponse(res, 'Thông tin Config', {});
  } catch (error: any) {
    errorResponse(
      res,
      error?.message,
      error,
      httpStatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};
