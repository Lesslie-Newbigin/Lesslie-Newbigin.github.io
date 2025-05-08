// script.js

// Smooth scroll for navigation links document.querySelectorAll('nav a').forEach(anchor => { anchor.addEventListener('click', function(e) { e.preventDefault(); const targetId = this.getAttribute('href').substring(1); const target = document.getElementById(targetId); if (target) { window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' }); } }); });

// Highlight active link while scrolling window.addEventListener('scroll', () => { const scrollPos = window.scrollY + 100; document.querySelectorAll('nav a').forEach(link => { const section = document.querySelector(link.getAttribute('href')); if ( section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos ) { link.style.color = '#ffcc00'; } else { link.style.color = '#ffffff'; } }); });

// Colorful animated header text const headerTitle = document.querySelector('header h1'); if (headerTitle) { let hue = 0; setInterval(() => { headerTitle.style.color = hsl(${hue}, 100%, 70%); hue = (hue + 2) % 360; }, 100); }

// Add entry animation to sections const sections = document.querySelectorAll('section'); const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } }); }, options);

sections.forEach(section => { section.classList.add('hidden'); observer.observe(section); });

