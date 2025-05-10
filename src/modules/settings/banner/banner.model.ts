// models/banner.model.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IStatistic {
  value: string;
  label: string;
}

export interface IBanner extends Document {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  buttonText: string;
  imageUrl: string;
  statistics: IStatistic[];
}

const StatisticSchema: Schema = new Schema({
  value: { type: String, required: true },
  label: { type: String, required: true },
});

const BannerSchema: Schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  searchPlaceholder: { type: String, required: true },
  buttonText: { type: String, required: true },
  imageUrl: { type: String, required: true },
  statistics: {
    type: [StatisticSchema],
    default: [],
  },
});

const Banner = mongoose.model<IBanner>('Banner', BannerSchema);
export default Banner;
