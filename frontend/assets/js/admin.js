console.log("✅ admin.js loaded");

document
  .getElementById("ipo-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJsdWVzdG9jay5jb20iLCJpYXQiOjE3NTQxNTcwNzYsImV4cCI6MTc1NDE2MDY3Nn0.BHUGwHbqjwPqZvEeAgcTtezy0_yPgoRR8BtCRm_zCvw"; // Replace this with your working token

    const alertBox = document.getElementById("alert-box");
    const msgBox = document.getElementById("message-box");

    try {
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
