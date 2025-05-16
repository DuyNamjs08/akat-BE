import mongoose, { Schema } from 'mongoose';

const NotificationSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ['system', 'user', 'order', 'comment', 'custom'],
      default: 'system',
    },
    data: { type: Schema.Types.Mixed, default: {} },
    isRead: { type: Boolean, default: false },
    readAt: { type: Date },
    expiresAt: { type: Date },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    collection: 'notifications',
  },
);

export const NotificationModel = mongoose.model(
  'Notification',
  NotificationSchema,
);
