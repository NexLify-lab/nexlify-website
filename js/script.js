// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Fade-in animation for sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Interactive image hover effects
const hoverItems = document.querySelectorAll('.highlight-item, .service-item, .step-item, .contact-item');
hoverItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const image = item.dataset.image;
        if (image) {
            item.style.backgroundImage = `url(${image})`;
        }
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundImage = '';
    });
});
