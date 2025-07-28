import insertDummyIPO from './models/ipoModel.js';

const dummy = {
  name: "ABC Tech Ltd",
  logo_path: "/uploads/abc-logo.png",
  price_band: "₹100 - ₹120",
  open_date: "2025-08-01",
  close_date: "2025-08-03",
  issue_size: "₹500 Cr",
  issue_type: "Book Built Issue",
  listing_date: "2025-08-10",
  status: "upcoming",
  ipo_price: 110,
  listing_price: null,
  current_price: null,
  rhp_path: "/uploads/abc-rhp.pdf",
  drhp_path: "/uploads/abc-drhp.pdf"
};

insertDummyIPO(dummy)
  .then((data) => {
    console.log("✅ Inserted Dummy IPO:", data);
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Insert Error:", err);
    process.exit(1);
  });
// This script is used to insert a dummy IPO record into the database.