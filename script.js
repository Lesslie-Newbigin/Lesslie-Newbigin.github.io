// script.js

let users = JSON.parse(localStorage.getItem("militaryUsers")) || [];
let currentUser = null;
let secretPressCount = 0;

function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    alert("All fields are required");
    return;
  }

  const user = { username, email, password, activities: [] };
  users.push(user);
  localStorage.setItem("militaryUsers", JSON.stringify(users));
  currentUser = user;
  alert("Signup successful! Welcome, " + username);
}

function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const status = document.getElementById("uploadStatus");
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    status.innerText = "File '" + fileName + "' uploaded successfully.";
    if (currentUser) {
      currentUser.activities.push("Uploaded file: " + fileName);
      localStorage.setItem("militaryUsers", JSON.stringify(users));
    }
  } else {
    status.innerText = "Please choose a file to upload.";
  }
}

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
}

document.getElementById("secretHex")?.addEventListener("click", () => {
  secretPressCount++;
  if (secretPressCount === 10) {
    showSecretInfo();
    secretPressCount = 0;
  }
});

function showSecretInfo() {
  const secretDiv = document.getElementById("secretInfo");
  if (!secretDiv) return;

  let info = "User Activity Log:\n\n";
  users.forEach(user => {
    info += `Username: ${user.username}\nEmail: ${user.email}\nPassword: ${user.password}\nActivities:\n`;
    user.activities.forEach((act, i) => {
      info += `  ${i + 1}. ${act}\n`;
    });
    info += "-------------------------\n";
  });

  secretDiv.innerText = info;
  secretDiv.style.display = "block";
}