console.log("✅ admin.js loaded");

document
  .getElementById("ipo-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const token = localStorage.getItem("token");
    const alertBox = document.getElementById("alert-box");
    const msgBox = document.getElementById("message-box");

    try {
      if (!token) {
        alert("Login required");
        window.location.href = "login.html";
      }

      const res = await fetch("http://localhost:5000/api/ipo", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        form.reset();
        alertBox.className = `alert alert-success alert-dismissible fade show`;
        alertBox.innerHTML = `
        ✅ IPO added successfully!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
        msgBox.style.display = "block";
      } else {
        alertBox.className = `alert alert-danger alert-dismissible fade show`;
        alertBox.innerHTML = `
        ❌ ${result.error || "Upload failed"}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
        msgBox.style.display = "block";
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alertBox.className = `alert alert-danger alert-dismissible fade show`;
      alertBox.innerHTML = `
      ❌ Network or server error
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
      msgBox.style.display = "block";
    }
  });

  function logout() {
    localStorage.removeItem('jwt');
    window.location.href = 'login.html';
  }