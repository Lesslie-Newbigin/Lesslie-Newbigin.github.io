function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === "lesslie Newbigin" && pass === "2aug0088l") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
  } else {
    error.style.color = "red";
    error.textContent = "Invalid credentials. Access denied.";
  }
}