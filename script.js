// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Intersection Observer for animations on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Toggle mobile nav
document.querySelector('.menu-toggle')?.addEventListener("click", () => {
  document.querySelector(".nav-menu")?.classList.toggle("open");
});

// Typing effect
function typeEffect(element, speed = 70) {
  const text = element.innerText;
  element.innerText = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".typewriter").forEach(el => typeEffect(el));
});

// Back to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});