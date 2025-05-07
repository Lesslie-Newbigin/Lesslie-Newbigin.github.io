// Firebase Config - Replace with your project info
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

function showSection(id) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function uploadFile() {
  const file = document.getElementById("fileInput").files[0];
  const status = document.getElementById("uploadStatus");

  if (!file) {
    status.textContent = "Please choose a file.";
    return;
  }

  const storageRef = storage.ref('uploads/' + file.name);
  storageRef.put(file).then(snapshot => {
    status.textContent = `Uploaded: ${file.name}`;
    loadFiles();
  }).catch(err => {
    status.textContent = "Upload failed.";
    console.error(err);
  });
}

function loadFiles() {
  const listRef = storage.ref('uploads/');
  const fileList = document.getElementById("fileList");
  fileList.innerHTML = "";

  listRef.listAll().then(res => {
    res.items.forEach(itemRef => {
      itemRef.getDownloadURL().then(url => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${url}" target="_blank">${itemRef.name}</a>`;
        fileList.appendChild(li);
      });
    });
  });
}

window.onload = loadFiles;