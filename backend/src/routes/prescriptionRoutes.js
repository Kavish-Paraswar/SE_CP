import { Router } from 'express';
import { createPrescription, listPrescriptions } from '../controllers/prescriptionController.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.get('/', authGuard, listPrescriptions);
router.post('/', authGuard, createPrescription);

export default router;
