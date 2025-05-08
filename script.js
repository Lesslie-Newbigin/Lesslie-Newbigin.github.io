document.addEventListener("DOMContentLoaded", function () {
  // Typed.js animation
  var options = {
    strings: ["Cybersecurity Analyst", "AI Specialist", "Technologist"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
  };

  new Typed(".typed", options);

  // Smooth scroll navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      // Close the mobile menu after clicking
      const navLinks = document.querySelector('nav ul');
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});