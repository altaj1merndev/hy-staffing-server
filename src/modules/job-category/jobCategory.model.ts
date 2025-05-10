import mongoose from 'mongoose';
import { TJobCategory } from './jobCategory.interface';


const jobCategorySchema = new mongoose.Schema<TJobCategory>(
  {
    agentId: {
        type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
      required: [true, 'Agent ID is required'],
      trim: true,
    },
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
    buttonText: {
      type: String,
      required: [true, 'Button text is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Static method to find job category by slug
jobCategorySchema.statics.findBySlug = function (slug: string) {
  return this.findOne({ slug });
};

// Static method to find job category by agentId
jobCategorySchema.statics.findByAgentId = function (agentId: string) {
  return this.findOne({ agentId });
};

// Method to update job category title
jobCategorySchema.methods.updateTitle = function (newTitle: string) {
  this.title = newTitle;
  return this.save();
};

// Static method to find all job categories
jobCategorySchema.statics.findAll = function () {
  return this.find();
};

export const JobCategory = mongoose.model<TJobCategory>('JobCategory', jobCategorySchema);
