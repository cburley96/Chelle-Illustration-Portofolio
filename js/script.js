// Set active nav link based on current page
function setActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function setupMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('.site-nav');

    if (!navToggle || !siteNav) return;

    navToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 640) {
            siteNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    setupMobileNav();
});

const images = [
    "images/large/artwork01-1600.jpg",
    "images/large/artwork02-1600.jpg",
    "images/large/artwork03-1600.jpg",
    "images/large/artwork04-1600.jpg",
    "images/large/artwork05-1600.jpg",
    "images/large/artwork06-1600.jpg",
    "images/large/artwork07-1600.jpg",
    "images/large/artwork08-1600.jpg",
    "images/large/artwork09-1600.jpg",
    "images/large/artwork10-1600.jpg",
    "images/large/artwork11-1600.jpg",
    "images/large/artwork12-1600.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function(e) {
    if (e.target === this) closeLightbox();
});