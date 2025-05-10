// home/home.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IWhoWeAre {
  title: string;
  subtitle: string;
}

export interface IJobOpportunities {
  title: string;
  subtitle: string;
}

export interface ISuccessStories {
  title: string;
  subtitle: string;
}

export interface IEmpolyeLooking {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface IHome extends Document {
  whoWeAre: IWhoWeAre;
  jobOpportunities: IJobOpportunities;
  successStories: ISuccessStories;
  empolyeLooking: IEmpolyeLooking;
}

const WhoWeAreSchema: Schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const JobOpportunitiesSchema: Schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const SuccessStoriesSchema: Schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

const EmpolyeLookingSchema: Schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  buttonText: { type: String, required: true },
});

const HomeSchema: Schema = new Schema({
  whoWeAre: { type: WhoWeAreSchema, required: true },
  jobOpportunities: { type: JobOpportunitiesSchema, required: true },
  successStories: { type: SuccessStoriesSchema, required: true },
  empolyeLooking: { type: EmpolyeLookingSchema, required: true },
});

const Home = mongoose.model<IHome>('Home', HomeSchema);
export default Home;
