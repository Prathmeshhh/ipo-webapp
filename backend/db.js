import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
  max: 10, // Maximum number of clients in the pool
});

pool.query('SELECT * FROM ipos')
  .then((res) => {
    console.log('✅ Direct Test Query Result:', res.rows);
  })
  .catch((err) => {
    console.error('❌ Direct Test Query Error:', err.message);
  });

export default pool;
