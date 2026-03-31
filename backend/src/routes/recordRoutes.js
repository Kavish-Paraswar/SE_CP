import { Router } from 'express';
import { createRecord, listRecords, updateRecord } from '../controllers/recordController.js';
import { authGuard } from '../middleware/auth.js';

const router = Router();

router.get('/', authGuard, listRecords);
router.post('/', authGuard, createRecord);
router.patch('/:id', authGuard, updateRecord);

export default router;
