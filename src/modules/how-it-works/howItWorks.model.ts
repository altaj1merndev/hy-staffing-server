import mongoose, { Schema } from 'mongoose';
import { THowItWorks } from './howItWorks.interface';

const howItWorksSchema = new Schema<THowItWorks>(
  {
    logo: {
      type: String,
      required: [true, 'Logo is required'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    subTitle: {
      type: String,
      required: [true, 'Sub-title is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const HowItWorks = mongoose.model<THowItWorks>('HowItWorks', howItWorksSchema);
