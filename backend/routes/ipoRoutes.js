import express from 'express';
const router = express.Router();
import { getAllIPOs } from '../models/ipoModel.js';

router.get('/', async (req, res) => {
  try {
    const ipos = await getAllIPOs();
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch IPOs' });
  }
});

export default router;
