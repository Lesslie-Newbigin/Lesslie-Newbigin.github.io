// script.js

const addCertBtn = document.getElementById("addCertBtn"); const modal = document.getElementById("uploadModal"); const closeModal = document.querySelector(".close"); const form = document.getElementById("certUploadForm"); const certList = document.getElementById("certList");

// Open modal addCertBtn.onclick = () => { modal.style.display = "block"; };

// Close modal closeModal.onclick = () => { modal.style.display = "none"; };

// Close modal when clicking outside of it window.onclick = function(event) { if (event.target === modal) { modal.style.display = "none"; } };

// Handle certificate upload form.onsubmit = (e) => { e.preventDefault(); const title = document.getElementById("certTitle").value; const file = document.getElementById("certFile").files[0];

if (title && file) { const certItem = document.createElement("div"); certItem.className = "cert-item"; certItem.innerHTML = <h3>${title}</h3> <p>File: ${file.name}</p>; certList.appendChild(certItem); modal.style.display = "none"; form.reset(); } else { alert("Please fill in all fields."); } };

