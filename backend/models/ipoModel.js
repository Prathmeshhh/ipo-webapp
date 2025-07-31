import db from '../db.js';

// Get all IPOs
export const  getAllIPOs = async () => {
  try {
    const result = await db.query('SELECT * FROM ipos ORDER BY open_date DESC');
    return result.rows;
  } catch (err) {
    console.error("❌ DB error in getAllIPOs:", err.message);
    throw err;
  }
}

// Insert new IPO
// async function insertDummyIPO(ipo) {
//   const result = await db.query(
//     `INSERT INTO ipos (
//       name, logo_path, price_band, open_date, close_date,
//       issue_size, issue_type, listing_date, status,
//       ipo_price, listing_price, current_price,
//       rhp_path, drhp_path
//     ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
//     RETURNING *`,
//     [
//       ipo.name, ipo.logo_path, ipo.price_band, ipo.open_date, ipo.close_date,
//       ipo.issue_size, ipo.issue_type, ipo.listing_date, ipo.status,
//       ipo.ipo_price, ipo.listing_price, ipo.current_price,
//       ipo.rhp_path, ipo.drhp_path
//     ]
//   );
//   return result.rows[0];
// }

// This function inserts a new IPO record into the database and returns the inserted record.
export  async function insertIPO(ipo) {
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

// Update IPO by ID
export async function updateIPO(id, updated) {
  const result = await db.query(
    `UPDATE ipos SET
      name = $1,
      price_band = $2,
      open_date = $3,
      close_date = $4,
      issue_size = $5,
      issue_type = $6,
      listing_date = $7,
      status = $8,
      ipo_price = $9,
      listing_price = $10,
      current_price = $11
    WHERE id = $12
    RETURNING *`,
    [
      updated.name,
      updated.price_band,
      updated.open_date,
      updated.close_date,
      updated.issue_size,
      updated.issue_type,
      updated.listing_date,
      updated.status,
      updated.ipo_price,
      updated.listing_price,
      updated.current_price,
      id
    ]
  );
  return result.rows[0];
}

// Delete IPO by ID
export async function deleteIPO(id) {
  const result = await db.query('DELETE FROM ipos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}


// This module provides functions to interact with the IPOs table in the database.
// It includes functions to get all IPOs and insert a new IPO record.
