import { Message } from './message.model';

export const createMessage = async (sender: string, receiver: string, text: string) => {
  return await Message.create({ sender, receiver, text });
};

export const getMessages = async (user1: string, user2: string) => {
  const result =  await Message.find({
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 },
    ],
  }).sort({ createdAt: 1 });
  return result
};
