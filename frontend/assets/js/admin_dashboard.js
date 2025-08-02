const token = localStorage.getItem('jwt');
if (!token) {
  alert('Login required');
  window.location.href = 'login.html';
}


async function fetchIPOs() {
  try {
    const res = await fetch('http://localhost:5000/api/ipo', {
      headers: { Authorization: `Bearer ${token}` }
    });

    const ipos = await res.json();
    const container = document.getElementById('ipo-container');
    container.innerHTML = '';

    ipos.forEach(ipo => {
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="http://localhost:5000${ipo.logo_path}" class="card-img-top" alt="${ipo.name}" style="height: 200px; object-fit: contain; background: #f8f9fa;">
          <div class="card-body">
            <h5 class="card-title">${ipo.name}</h5>
            <p class="card-text"><strong>Status:</strong> ${ipo.status}</p>
            <div class="d-flex gap-2 mt-3">
              <a href="edit_ipo.html?id=${ipo.id}" class="btn btn-sm btn-primary">Edit</a>
              <button class="btn btn-sm btn-danger" onclick="deleteIPO(${ipo.id})">Delete</button>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load IPOs:', err);
  }
}

async function deleteIPO(id) {
  if (!confirm('Are you sure you want to delete this IPO?')) return;

  try {
    const res = await fetch(`http://localhost:5000/api/ipo/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });

    if (res.ok) {
      alert('IPO deleted');
      fetchIPOs(); // reload
    } else {
      alert('Failed to delete IPO');
    }
  } catch (err) {
    console.error('Delete error:', err);
  }
}

function logout() {
  localStorage.removeItem('jwt');
  window.location.href = 'login.html';
}

fetchIPOs();
