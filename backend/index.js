import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db.js'
import ipoRoutes from './routes/iporoutes.js';

// Initialize dotenv to load environment variables
dotenv.config();
const app = express();

// Applying middlewares
app.use(cors()); 
app.use(express.json()); 

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

