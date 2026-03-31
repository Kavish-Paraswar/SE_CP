import { Router } from 'express';
import { bookAppointment, listAppointments, updateAppointment } from '../controllers/appointmentController.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.get('/', authGuard, listAppointments);
router.post('/', authGuard, bookAppointment);
router.patch('/:id', authGuard, updateAppointment);

export default router;
