// Header hide/show on scroll
let lastScroll = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const homeText = document.getElementById('home-text');
    homeText.classList.add('show'); // fade/slide in
  }, 3000);
});


// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuDropdown = document.getElementById('menuDropdown');

hamburgerBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent body click listener from immediately closing
  menuDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        menuDropdown.classList.remove('show');
    }
});

// Hover for desktop
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', () => {
    menuDropdown.classList.add('show');
});
dropdown.addEventListener('mouseleave', () => {
    menuDropdown.classList.remove('show');
});
