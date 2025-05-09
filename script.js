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
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I’ll get back to you soon.");
    contactForm.reset();
  });
});