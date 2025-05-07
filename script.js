function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "Lesslie Newbigin" && password === "2aug0088l") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Invalid credentials. Access denied.";
  }
}