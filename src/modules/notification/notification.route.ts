import express from 'express';
import NotificationModel from './notification.model';

const router = express.Router();

// GET all notifications for a user
router.get('/:userId', async (req, res) => {
  const notifications = await NotificationModel.find({ userId: req.params.userId }).sort({ createdAt: -1 });
  res.json(notifications);
});

// Mark as read
router.post('/read/:id', async (req, res) => {
  await NotificationModel.findByIdAndUpdate(req.params.id, { isRead: true });
  res.json({ success: true });
});

export const NotificationsRoute = router;
