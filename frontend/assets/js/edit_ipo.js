const params = new URLSearchParams(window.location.search);
const ipoId = params.get('id');
const token = localStorage.getItem('jwt');

if (!token) {
  alert("Login required");
  window.location.href = "login.html";
}

const form = document.getElementById("edit-form");

async function loadIPO() {
  const res = await fetch("http://localhost:5000/api/ipo", {
    headers: { Authorization: `Bearer ${token}` }
  });

  const ipos = await res.json();
  const ipo = ipos.find(i => i.id == ipoId);
  if (!ipo) return alert("IPO not found");

  form.name.value = ipo.name;
  form.price_band.value = ipo.price_band;
  form.status.value = ipo.status;
  form.open_date.value = ipo.open_date?.split("T")[0];
  form.close_date.value = ipo.close_date?.split("T")[0];
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const updatedIPO = {
    name: form.name.value,
    price_band: form.price_band.value,
    status: form.status.value,
    open_date: form.open_date.value,
    close_date: form.close_date.value,
  };

  const res = await fetch(`http://localhost:5000/api/ipo/${ipoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(updatedIPO)
  });

  if (res.ok) {
    alert("IPO updated successfully");
    window.location.href = "admin_dashboard.html";
  } else {
    alert("Failed to update IPO");
  }
});

loadIPO();
