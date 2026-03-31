import { Router } from 'express';
import { login, me, register } from '../controllers/authController.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authGuard, me);

export default router;
