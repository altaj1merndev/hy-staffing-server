import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  userId: string; // who should see this
  type: 'message' | 'product' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

const notificationSchema = new Schema<INotification>({
  userId: { type: String, required: true },
  type: { type: String, enum: ['message', 'product', 'system'], required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

const NotificationModel = mongoose.model<INotification>('Notification', notificationSchema);
export default NotificationModel;
