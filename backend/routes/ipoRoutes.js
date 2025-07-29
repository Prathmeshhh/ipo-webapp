import express from 'express';
import { getAllIPOs } from '../models/ipoModel.js';
import createIPO from '../controllers/ipoController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// GET all IPOs
router.get('/', async (req, res) => {
  try {
    const ipos = await getAllIPOs();
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch IPOs' });
  }
});

// POST new IPO with files
router.post(
  '/',
  upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'rhp', maxCount: 1 },
    { name: 'drhp', maxCount: 1 }
  ]),
  createIPO
);


export default router;

// This file defines the routes for handling IPO-related requests.
// It includes a route to get all IPOs from the database.