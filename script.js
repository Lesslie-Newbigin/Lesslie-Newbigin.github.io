const addCertBtn = document.getElementById('addCertBtn');
const uploadModal = document.getElementById('uploadModal');
const closeModal = document.querySelector('.modal-content .close');
const certUploadForm = document.getElementById('certUploadForm');

addCertBtn.addEventListener('click', function () {
  uploadModal.style.display = 'block';
});

closeModal.addEventListener('click', function () {
  uploadModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === uploadModal) {
    uploadModal.style.display = 'none';
  }
});

certUploadForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const certTitle = document.getElementById('certTitle').value;
  const certFile = document.getElementById('certFile').files[0];

  if (!certTitle || !certFile) {
    alert("Please fill in both fields before uploading.");
    return;
  }

  const certItem = document.createElement('div');
  certItem.classList.add('certItem');

  const certImage = document.createElement('img');
  const reader = new FileReader();

  reader.onload = function (e) {
    certImage.src = e.target.result;
  };

  reader.readAsDataURL(certFile);

  const certTitleElement = document.createElement('h3');
  certTitleElement.textContent = certTitle;

  certItem.appendChild(certTitleElement);
  certItem.appendChild(certImage);

  const certList = document.getElementById('certList');
  certList.appendChild(certItem);

  certUploadForm.reset();
  uploadModal.style.display = 'none';
});

function filterCerts(category) {
  const certItems = document.querySelectorAll('.certItem');
  
  if (category === 'all') {
    certItems.forEach(item => item.style.display = 'block');
  } else {
    certItems.forEach(item => {
      const title = item.querySelector('h3').textContent.toLowerCase();
      if (title.includes(category.toLowerCase())) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}