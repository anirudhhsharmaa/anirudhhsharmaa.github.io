// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu for mobile view
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav-list--open');
});
