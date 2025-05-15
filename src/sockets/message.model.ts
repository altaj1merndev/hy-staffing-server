import { Schema, model } from 'mongoose';

const messageSchema = new Schema(
  {
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export const Message = model('Message', messageSchema);
