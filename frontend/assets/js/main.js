async function loadIPOs() {
  try {
    const response = await fetch('http://localhost:5000/api/ipo');
    const ipos = await response.json();

    const container = document.getElementById('ipo-list');
    container.innerHTML = '';

    ipos.forEach(ipo => {
      const card = `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="http://localhost:5000${ipo.logo_path}" class="card-img-top" alt="${ipo.name}" style="height: 200px; object-fit: contain; background: #f8f9fa;">
            <div class="card-body">
              <h5 class="card-title">${ipo.name}</h5>
              <p class="card-text mb-1"><strong>Status:</strong> ${ipo.status}</p>
              <p class="card-text mb-1"><strong>Price Band:</strong> ${ipo.price_band}</p>
              <p class="card-text mb-1"><strong>Open:</strong> ${ipo.open_date?.split('T')[0]}</p>
              <p class="card-text"><strong>Close:</strong> ${ipo.close_date?.split('T')[0]}</p>
              <a href="http://localhost:5000${ipo.rhp_path}" target="_blank" class="btn btn-sm btn-outline-primary mt-2">Download RHP</a>
              <a href="http://localhost:5000${ipo.drhp_path}" target="_blank" class="btn btn-sm btn-outline-secondary mt-2 ms-2">Download DRHP</a>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  } catch (error) {
    console.error('❌ Failed to load IPOs:', error);
  }
}

loadIPOs();

document.getElementById('searchInput').addEventListener('input', (e) => {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const name = card.querySelector('.card-title').textContent.toLowerCase();
    card.parentElement.style.display = name.includes(search) ? 'block' : 'none';
  });
});
