// src/routes/subscriptionRoutes.js
import express from 'express';
import { subscribe, unsubscribe } from '../controllers/subscriptionController.js';

const router = express.Router();

router.post('/subscribe', subscribe);
router.delete('/unsubscribe', unsubscribe);

export default router;
