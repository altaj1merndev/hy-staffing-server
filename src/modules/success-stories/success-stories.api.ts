import express from 'express';
import { SuccessStoryControllers } from './success-stories.controller';

const router = express.Router();

// Route to create a new success story
router.post('/', SuccessStoryControllers.createSuccessStory);

// Route to get all success stories
router.get('/', SuccessStoryControllers.getAllSuccessStories);

// Route to get a single success story by ID
router.get('/:id', SuccessStoryControllers.getSuccessStoryById);

// Route to update a success story by ID
router.put('/:id', SuccessStoryControllers.updateSuccessStory);

// Route to delete a success story by ID
router.delete('/:id', SuccessStoryControllers.deleteSuccessStory);

export const SuccessStoryRoute =  router;
