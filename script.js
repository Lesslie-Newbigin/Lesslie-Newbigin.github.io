let clickCount = 0;

// Load existing user if
window.onload = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user) {
    showHomepage(user.username);
  }
};

function register() {
  const username = document.getElementById("newUsername").value.trim();
  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const msg = document.getElementById("signupMsg");

  if (!username || !email || !password) {
    msg.textContent = "All fields are required.";
    return;
  }

  const userData = { username, email, password, timestamp: new Date().toLocaleString() };
  localStorage.setItem("userData", JSON.stringify(userData));
  showHomepage(username);
}

function showHomepage(username) {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("homepage").style.display = "block";
  document.getElementById("homepage").querySelector("header h1").textContent = username;
}

document.getElementById("secretBtn").addEventListener("click", () => {
  clickCount++;
  if (clickCount === 5) {
    showAdminPanel();
    clickCount = 0;
  }
});

function showAdminPanel() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const log = document.getElementById("userLog");

  if (!user) {
    log.innerHTML = "<div class='log-entry'>No user data available</div>";
  } else {
    log.innerHTML = `
      <div class='log-entry'>[USER] Username: ${user.username}</div>
      <div class='log-entry'>[USER] Email: ${user.email}</div>
      <div class='log-entry'>[USER] Password: ${user.password}</div>
      <div class='log-entry'>[TIME] Created: ${user.timestamp}</div>
    `;
  }
  document.getElementById("adminPanel").style.display = "block";
}