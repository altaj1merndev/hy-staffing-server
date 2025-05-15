import { Request, Response } from 'express';
import { createMessage, getMessages } from './message.service';

export const sendMessage = async (req: Request, res: Response) => {
  const { sender, receiver, text } = req.body;
  const message = await createMessage(sender, receiver, text);
  res.status(201).json(message);
};

export const fetchMessages = async (req: Request, res: Response) => {
  const { user1, user2 } = req.body;
  const messages = await getMessages(user1, user2);
  res.status(200).json(messages);
};
