 // Importing the SuccessStory model

import AppError from "../../errors/AppError";
import { TSuccessStories } from "./success-stories.interface";
import SuccessStory from "./sucess-stories.mode";

// Create a new success story
const createSuccessStory = async (payload: TSuccessStories) => {
  const result = await SuccessStory.create(payload);
  return result;
};

// Get all success stories
const getAllSuccessStories = async () => {
  const result = await SuccessStory.find();
  return result;
};

// Get a single success story by ID
const getSuccessStoryById = async (id: string) => {
  const result = await SuccessStory.findById(id);

  if (!result) {
    throw new AppError(404, 'Success story not found!');
  }

  return result;
};

// Update a success story by ID
const updateSuccessStory = async (id: string, payload: Partial<TSuccessStories>) => {
  const result = await SuccessStory.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(404, 'Success story not found!');
  }

  return result;
};

// Delete a success story by ID
const deleteSuccessStory = async (id: string) => {
  const result = await SuccessStory.findByIdAndDelete(id);

  if (!result) {
    throw new AppError(404, 'Success story not found!');
  }

  return result;
};

export const SuccessStoryServices = {
  createSuccessStory,
  getAllSuccessStories,
  getSuccessStoryById,
  updateSuccessStory,
  deleteSuccessStory,
};
