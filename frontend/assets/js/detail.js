async function loadIPO() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const res = await fetch("http://localhost:5000/api/ipo");
  const ipos = await res.json();
  const ipo = ipos.find((i) => i.id == id);

  if (!ipo) {
    document.getElementById("ipo-name").textContent = "IPO Not Found";
    return;
  }

  document.getElementById("ipo-name").textContent = ipo.name;
  document.getElementById(
    "ipo-logo"
  ).src = `http://localhost:5000${ipo.logo_path}`;
  document.getElementById("ipo-status").textContent = ipo.status;
  document.getElementById("ipo-price-band").textContent = ipo.price_band;
  document.getElementById("ipo-open").textContent =
    ipo.open_date?.split("T")[0];
  document.getElementById("ipo-close").textContent =
    ipo.close_date?.split("T")[0];
  document.getElementById("ipo-size").textContent = ipo.issue_size;
  document.getElementById("ipo-type").textContent = ipo.issue_type;
  document.getElementById("ipo-listing").textContent =
    ipo.listing_date?.split("T")[0];
  document.getElementById("ipo-price").textContent = ipo.ipo_price;
  document.getElementById("ipo-listing-price").textContent =
    ipo.listing_price || "-";
  document.getElementById("ipo-current-price").textContent =
    ipo.current_price || "-";

  document.getElementById(
    "rhp-link"
  ).href = `http://localhost:5000${ipo.rhp_path}`;
  document.getElementById(
    "drhp-link"
  ).href = `http://localhost:5000${ipo.drhp_path}`;
}

loadIPO();

const toggleBtn = document.getElementById("theme-toggle");
const prefersDark = localStorage.getItem("dark-mode") === "true";

function applyTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  toggleBtn.innerText = isDark ? "☀️ Light Mode" : "🌙 Enable Dark Mode";
  localStorage.setItem("dark-mode", isDark);
}

toggleBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  applyTheme(isDark);
});

applyTheme(prefersDark); // Set initial mode
