import mongoose, { Document, Schema } from 'mongoose';
import { TSuccessStories } from './success-stories.interface';



// Define the Mongoose Schema for Success Stories
const successStorySchema: Schema<TSuccessStories & Document> = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      jobDesignation: {
        type: String,
        required: true,
      },
      subTitle: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  // Create the Mongoose Model
  const SuccessStory = mongoose.model<TSuccessStories & Document>(
    'SuccessStory',
    successStorySchema
  );
  
  export default SuccessStory;
