import express from 'express';
import { fetchMessages, sendMessage } from './message.controller';

const router = express.Router();

router.post('/send', sendMessage);
router.post('/history', fetchMessages);

export const MessageRoute = router;
