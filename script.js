const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const uploadStatus = document.getElementById("uploadStatus");

  if (!file) {
    alert("Please select a file to upload.");
    return;
  }

  const storageRef = firebase.storage().ref("uploads/" + file.name);
  const uploadTask = storageRef.put(file);

  uploadTask.on(
    "state_changed",
    function (snapshot) {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploadStatus.innerText = `Upload is ${percent.toFixed(2)}% done`;
    },
    function (error) {
      alert("Error uploading file: " + error.message);
    },
    function () {
      alert("File uploaded successfully!");
      fileInput.value = "";
      uploadStatus.innerText = "";
    }
  );
}
