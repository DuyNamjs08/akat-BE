import mongoose, { Schema } from 'mongoose';

const mailSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'mails',
  },
);

export const MailsModel = mongoose.model('Mails', mailSchema);
