import insertIPO from '../models/ipoModel.js';

// Utility function to handle optional number fields
const parseOrNull = (val) => val === "" ? null : Number(val);

async function createIPO(req, res) {
  try {
    const {
      name, price_band, open_date, close_date,
      issue_size, issue_type, listing_date, status,
      ipo_price, listing_price, current_price
    } = req.body;

    const logo_path = req.files?.logo ? `/uploads/${req.files.logo[0].filename}` : null;
    const rhp_path = req.files?.rhp ? `/uploads/${req.files.rhp[0].filename}` : null;
    const drhp_path = req.files?.drhp ? `/uploads/${req.files.drhp[0].filename}` : null;

    const newIPO = await insertIPO({
      name,
      logo_path,
      price_band,
      open_date,
      close_date,
      issue_size,
      issue_type,
      listing_date,
      status,
      ipo_price: parseOrNull(ipo_price),
      listing_price: parseOrNull(listing_price),
      current_price: parseOrNull(current_price),
      rhp_path,
      drhp_path
    });

    res.status(201).json(newIPO);
  } catch (err) {
    console.error("❌ Error in createIPO:", err.message);
    res.status(500).json({ error: 'Failed to create IPO' });
  }
}


export default createIPO;
