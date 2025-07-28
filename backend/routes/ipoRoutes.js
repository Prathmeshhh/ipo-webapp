import express from 'express';

const router = express.Router();
import { getAllIPOs } from '../models/ipoModel.js';

router.get('/', async (req, res) => {
  try {
    const ipos = await getAllIPOs();
    console.log("✅ IPOs fetched:", ipos);
    res.json(ipos);
  } catch (err) {
    console.error("❌ Error in /api/ipo route:", err.message);
    res.status(500).json({ error: 'Failed to fetch IPOs' });
  }
});

export default router;

// This file defines the routes for handling IPO-related requests.
// It includes a route to get all IPOs from the database.