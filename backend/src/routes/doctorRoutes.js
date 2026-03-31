import { Router } from 'express';
import { listDoctors } from '../controllers/doctorController.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.get('/', authGuard, listDoctors);

export default router;
