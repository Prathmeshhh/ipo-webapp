import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import ipoRoutes from './routes/ipoRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Initialize dotenv to load environment variables
dotenv.config();
const app = express();

// Support for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Applying middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', authRoutes);
app.use('/api/ipo', ipoRoutes);

// Root route - just to confirm the server is alive
app.get('/', (req, res) => {
  res.send('🚀 IPO API is live and running!');
});

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
