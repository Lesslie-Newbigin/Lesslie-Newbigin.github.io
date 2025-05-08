const addCertBtn = document.getElementById("addCertBtn");
const uploadModal = document.getElementById("uploadModal");
const closeModal = document.querySelector(".close");
const certUploadForm = document.getElementById("certUploadForm");
const certList = document.getElementById("certList");
const certTitle = document.getElementById("certTitle");
const certFile = document.getElementById("certFile");

addCertBtn.addEventListener("click", () => {
  uploadModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  uploadModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === uploadModal) {
    uploadModal.style.display = "none";
  }
});

certUploadForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = certTitle.value.trim();
  const file = certFile.files[0];
  if (!file || !title) return alert("Please provide title and file.");
  const reader = new FileReader();
  reader.onload = function (e) {
    const fileURL = e.target.result;
    const certId = Date.now().toString();
    const certData = {
      id: certId,
      title: title,
      fileType: file.type,
      fileName: file.name,
      fileURL: fileURL,
      category: detectCategory(title)
    };
    saveCert(certData);
    renderCert(certData);
    certUploadForm.reset();
    uploadModal.style.display = "none";
  };
  reader.readAsDataURL(file);
});

function detectCategory(title) {
  title = title.toLowerCase();
  if (title.includes("cyber") || title.includes("security")) return "cybersecurity";
  if (title.includes("network")) return "networking";
  if (title.includes("cloud")) return "cloud";
  if (title.includes("web")) return "webdev";
  return "general";
}

function renderCert(cert) {
  const certDiv = document.createElement("div");
  certDiv.classList.add("cert-item");
  certDiv.setAttribute("data-category", cert.category);
  certDiv.setAttribute("data-id", cert.id);

  const titleEl = document.createElement("h3");
  titleEl.textContent = cert.title;

  let contentElement;
  if (cert.fileType === "application/pdf") {
    contentElement = document.createElement("iframe");
    contentElement.src = cert.fileURL;
  } else if (cert.fileType.startsWith("image/")) {
    contentElement = document.createElement("img");
    contentElement.src = cert.fileURL;
  } else {
    return;
  }

  const downloadLink = document.createElement("a");
  downloadLink.href = cert.fileURL;
  downloadLink.download = cert.fileName;
  downloadLink.textContent = "Download";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => deleteCert(cert.id));

  certDiv.appendChild(deleteBtn);
  certDiv.appendChild(titleEl);
  certDiv.appendChild(contentElement);
  certDiv.appendChild(downloadLink);
  certList.appendChild(certDiv);
}

function saveCert(cert) {
  const certs = JSON.parse(localStorage.getItem("certificates") || "[]");
  certs.push(cert);
  localStorage.setItem("certificates", JSON.stringify(certs));
}

function deleteCert(id) {
  const certs = JSON.parse(localStorage.getItem("certificates") || "[]").filter(c => c.id !== id);
  localStorage.setItem("certificates", JSON.stringify(certs));
  document.querySelector(`[data-id="${id}"]`)?.remove();
}

function filterCerts(category) {
  const items = document.querySelectorAll(".cert-item");
  items.forEach(item => {
    item.style.display = (category === "all" || item.getAttribute("data-category") === category) ? "block" : "none";
  });
}

function loadCerts() {
  const certs = JSON.parse(localStorage.getItem("certificates") || "[]");
  certs.forEach(renderCert);
}

window.onload = loadCerts;