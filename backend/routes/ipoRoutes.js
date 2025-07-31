import express from 'express';
import { getAllIPOs } from '../models/ipoModel.js';
import { createIPO, editIPO, removeIPO } from '../controllers/ipoController.js';
import upload from '../middleware/upload.js';
import verifyToken from '../middleware/auth.js';

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

// POST IPO (Protected)
router.post(
  '/',
  verifyToken,
  upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'rhp', maxCount: 1 },
    { name: 'drhp', maxCount: 1 }
  ]),
  createIPO
);

// PUT IPO (Protected)
router.put('/:id', verifyToken, editIPO);

// DELETE IPO (Protected)
router.delete('/:id', verifyToken, removeIPO);

export default router;

// This file defines the routes for handling IPO-related requests.
// It includes a route to get all IPOs from the database.