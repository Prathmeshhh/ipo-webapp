import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import adminUser from '../data/adminUser.js';

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== adminUser.email) {
    return res.status(401).json({ error: 'Invalid email' });
  }

  const isMatch = bcrypt.compareSync(password, adminUser.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

export default router;
// This module handles authentication routes, including login for the admin user.
// It uses bcrypt for password hashing and JWT for token generation.
 