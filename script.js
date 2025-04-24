// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const html = document.documentElement;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation observer
const animateElements = document.querySelectorAll('.animate-fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeIn 1s ease-in forwards`;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));
// script.js
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Add hover effects
const hoverElements = document.querySelectorAll('a, button, [data-hover]');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    // Optional: Change cursor text when hovering specific elements
    if (el.dataset.cursorText) {
      cursor.textContent = el.dataset.cursorText;
      cursor.style.fontSize = '12px';
      cursor.style.display = 'flex';
      cursor.style.alignItems = 'center';
      cursor.style.justifyContent = 'center';
    }
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursor.textContent = '';
    cursor.style.fontSize = '';
    cursor.style.display = '';
  });
});

// Handle theme changes (if using the theme toggle from earlier)
function updateCursorTheme(theme) {
  if (theme === 'dark') {
    cursor.style.borderColor = '#646cff';
  } else {
    cursor.style.borderColor = '#747bff';
  }
}
// Add to mousemove event
let mouseX = e.clientX;
let mouseY = e.clientY;
let cursorX = parseFloat(cursor.style.left || 0);
let cursorY = parseFloat(cursor.style.top || 0);
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});


// Apply easing
cursor.style.left = `${cursorX + (mouseX - cursorX) * 0.1}px`;
cursor.style.top = `${cursorY + (mouseY - cursorY) * 0.1}px`;
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  // Scroll animation for philosophy text
const philosophyText = document.querySelector('.philosophy-text');

function animateOnScroll() {
  const elementTop = philosophyText.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (elementTop < windowHeight * 0.75) {
    philosophyText.classList.add('visible');
    // Remove event listener after animation triggers
    window.removeEventListener('scroll', animateOnScroll);
  }
}

// Initialize
window.addEventListener('scroll', animateOnScroll);
// Check on load in case already in view
window.addEventListener('load', animateOnScroll);
// Enhanced scroll animation for multiple elements
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function checkElements() {
  animatedElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight * 0.75) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkElements);
window.addEventListener('load', checkElements);
// Animate stack items on scroll
const stackItems = document.querySelectorAll('.stack-item');

function animateStackItems() {
  stackItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight * 0.85) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateStackItems);
window.addEventListener('load', animateStackItems);