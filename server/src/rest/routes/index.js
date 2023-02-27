import express from 'express';
const router = express.Router();
import baseRouter from './baseRouter';

router.use(baseRouter);
export default router;