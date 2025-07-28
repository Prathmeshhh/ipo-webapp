import db from '../db.js';

// Get all IPOs
export const  getAllIPOs = async () => {
  const result = await db.query('SELECT * FROM ipos ORDER BY open_date DESC');
  return result.rows;
}

// Insert new IPO
async function insertDummyIPO(ipo) {
  const result = await db.query(
    `INSERT INTO ipos (
      name, logo_path, price_band, open_date, close_date,
      issue_size, issue_type, listing_date, status,
      ipo_price, listing_price, current_price,
      rhp_path, drhp_path
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
    RETURNING *`,
    [
      ipo.name, ipo.logo_path, ipo.price_band, ipo.open_date, ipo.close_date,
      ipo.issue_size, ipo.issue_type, ipo.listing_date, ipo.status,
      ipo.ipo_price, ipo.listing_price, ipo.current_price,
      ipo.rhp_path, ipo.drhp_path
    ]
  );
  return result.rows[0];
}

export default insertDummyIPO;
// This module provides functions to interact with the IPOs table in the database.
// It includes functions to get all IPOs and insert a new IPO record.