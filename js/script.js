
window.addEventListener('load', () => {
  setTimeout(() => {
    const homeText = document.getElementById('home-text');
    homeText.classList.add('show'); // fade/slide in
  }, 3000);
});

// Bento scroll-responsive scaling
const bentoSections = document.querySelectorAll('.bento-section');

function updateBentoScale() {
  const windowCenter = window.innerHeight / 2;

  bentoSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const distance = Math.abs(windowCenter - sectionCenter);

    // scale from 1 to 1.2 depending on distance to center
    let scale = 1.4 - (distance / windowCenter) * 0.5;
    scale = Math.min(Math.max(scale, 0.9), 1.4); // clamp between 0.9 and 1.4

    section.style.transform = `scale(${scale})`;
    section.style.transition = 'transform 0.2s ease-out'; // smooth transition
  });
}

window.addEventListener('scroll', updateBentoScale);
window.addEventListener('resize', updateBentoScale);
updateBentoScale(); // initial call


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
