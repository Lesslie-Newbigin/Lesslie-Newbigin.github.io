document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js for the welcome message typing effect
  new Typed(".typed", {
    strings: ["Cybersecurity Analyst", "AI Specialist", "Technologist"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I’ll get back to you soon.");
    contactForm.reset();
  });

  // Theme toggle functionality (dark and light theme switch)
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  // Back-to-top button functionality
  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});