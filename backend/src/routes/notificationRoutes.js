import { Router } from 'express';
import { listNotifications, markRead } from '../controllers/notificationController.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.get('/', authGuard, listNotifications);
router.patch('/:id/read', authGuard, markRead);

export default router;
