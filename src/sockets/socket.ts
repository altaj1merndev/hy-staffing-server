// import { Server } from 'socket.io';
// import http from 'http';
// import { createMessage } from './message.service';

// const onlineUsers = new Map<string, string>();

// export const initSocket = (server: http.Server) => {
//   const io = new Server(server, {
//     cors: {
//       origin: ['http://localhost:3000'],
//       methods: ['GET', 'POST'],
//     },
//   });

//   io.on('connection', (socket) => {
//     socket.on('user-connected', (userId: string) => {
//         console.log("user-connected",{userId})
//       onlineUsers.set(userId, socket.id);
//     });

//     socket.on('send-message', async (data) => {
//         console.log({data})
//       await createMessage(data.sender, data.receiver, data.text);
//       const toSocket = onlineUsers.get(data.receiver);
// console.log({toSocket})
//       if (toSocket) {
//         io.to(toSocket).emit('receive-message', { from: data.sender, message: data.text });
//       }
//     });

//     socket.on('disconnect', () => {
//       [...onlineUsers.entries()].forEach(([key, value]) => {
//         if (value === socket.id) {
//           onlineUsers.delete(key);
//         }
//       });
//     });
//   });

//   return io;
// };


import { Server } from 'socket.io';
import http from 'http';
import { createMessage } from './message.service';
import NotificationModel from '../modules/notification/notification.model';

const onlineUsers = new Map<string, string>();

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:5173'],
      methods: ['GET', 'POST'],
    },
  });


  
  io.on('connection', (socket) => {
    // User connects
    socket.on('user-connected', (userId: string) => {
      console.log({userId})
      onlineUsers.set(userId, socket.id);
    });

    // Send message handler
    socket.on('send-message', async (data) => {

      // 1. Save the message to DB
     const message =  await createMessage(data.sender, data.receiver, data.text);
console.log({message})
      // 2. Create a notification
      const notification = await NotificationModel.create({
        userId: data.sender,
        type: 'message',
        title: 'New Message',
        message: `You have a new message from ${data.sender}`,
      });
      console.log({notification})
      console.log('Online users:', [...onlineUsers.entries()]);
      // 3. Emit to the receiver if online
      const toSocket = onlineUsers.get(data.receiver);
      console.log({toSocket})
      if (toSocket) {
        io.to(toSocket).emit('receive-message', {
          from: data.sender,
          message: data.text,
        });

        io.to(toSocket).emit('new-notification', {
          _id: notification._id,
          type: notification.type,
          title: notification.title,
          message: notification.message,
          createdAt: notification.createdAt,
        });
      }
    });

    // Handle disconnects
    socket.on('disconnect', () => {
      for (const [key, value] of onlineUsers.entries()) {
        if (value === socket.id) {
          onlineUsers.delete(key);
        }
      }
    });
  });

  return io;
};
