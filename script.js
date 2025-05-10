document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typed", {
    strings: ["Cybersecurity Analyst", "AI Specialist", "Technologist"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });

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

  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I’ll get back to you soon.");
    contactForm.reset();
  });

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const reveals = document.querySelectorAll(".reveal");
  const scrollReveal = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  window.addEventListener("scroll", scrollReveal);
  scrollReveal();
});