// --------------------
// Home text animation
// --------------------
window.addEventListener('load', () => {
  setTimeout(() => {
    const homeText = document.getElementById('home-text');
    if (homeText) homeText.classList.add('show');
  }, 3000);
});

// --------------------
// Bento scaling
// --------------------
const bentoSections = document.querySelectorAll('.bento-section');

function updateBentoScale() {
  const windowCenter = window.innerHeight / 2;
  bentoSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const distance = Math.abs(windowCenter - sectionCenter);

    let scale = 1.4 - (distance / windowCenter) * 0.5;
    scale = Math.min(Math.max(scale, 0.9), 1.4);

    section.style.transform = `scale(${scale})`;
    section.style.transition = 'transform 0.2s ease-out';
  });
}
window.addEventListener('scroll', updateBentoScale);
window.addEventListener('resize', updateBentoScale);
updateBentoScale();

// --------------------
// Header hide/show
// --------------------
let lastScroll = 0;
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (header) {
    header.style.transform = (currentScroll > lastScroll) 
      ? 'translateY(-100%)'
      : 'translateY(0)';
  }
  lastScroll = currentScroll;
});

// --------------------
// Hamburger menu
// --------------------
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuDropdown = document.getElementById('menuDropdown');

if (hamburgerBtn && menuDropdown) {
  hamburgerBtn.addEventListener('click', e => {
    e.stopPropagation();
    menuDropdown.classList.toggle('show');
  });
  document.body.addEventListener('click', e => {
    if (!e.target.closest('.dropdown')) menuDropdown.classList.remove('show');
  });
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    dropdown.addEventListener('mouseenter', () => menuDropdown.classList.add('show'));
    dropdown.addEventListener('mouseleave', () => menuDropdown.classList.remove('show'));
  }
}

// --------------------
// Unified Parallax
// --------------------
(function(){
  let items = [];
  function computeInitialTops() {
    const nodes = Array.from(document.querySelectorAll('[data-parallax]'));
    items = nodes.map(el => ({
      el,
      target: el.querySelector('.frosted-card, img') || el,
      speed: Math.max(0, parseFloat(el.getAttribute('data-parallax')) || 0.2),
      initialTop: el.getBoundingClientRect().top + window.pageYOffset
    }));
  }

  function updateParallax() {
    const scrollY = window.pageYOffset || 0;
    items.forEach(item => {
      let translate = -(scrollY - item.initialTop) * item.speed;
      // Special handling for carousel captions
      if (item.el.classList.contains('carousel-caption')) {
        translate = translate * 0.3; // slower scroll inside bottom panel
      }

      translate = Math.max(Math.min(translate, 250), -250);
      item.target.style.transform = `translateY(${translate}px) scale(1.05)`;
    });
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => { updateParallax(); ticking = false; });
      ticking = true;
    }
  }

  window.addEventListener('load', () => { computeInitialTops(); updateParallax(); });
  window.addEventListener('resize', () => { computeInitialTops(); updateParallax(); });
  window.addEventListener('scroll', onScroll);

  window.__serenityParallax = { computeInitialTops, updateParallax };
})();

// --------------------
// AOS init
// --------------------
function initAOS() {
  if (typeof AOS !== "undefined") AOS.init({ once: true });
}

// --------------------
// Carousel caption animations
// --------------------
function initCarouselCaptions() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel, { interval: 5000 });

    const firstSlide = carousel.querySelector('.carousel-item.active');
    if (firstSlide) animateCaptions(firstSlide);

    carousel.addEventListener('slid.bs.carousel', (e) => {
      animateCaptions(e.relatedTarget);
    });
  });

  function animateCaptions(slide) {
    const captions = slide.querySelectorAll('.carousel-caption.frosted-card');
    captions.forEach((cap, i) => {
      cap.style.opacity = 0;
      cap.style.transform = 'translateY(20px)';
      cap.style.transition = `opacity 0.6s ease ${(i*0.15)}s, transform 0.6s ease ${(i*0.15)}s`;
      requestAnimationFrame(() => {
        cap.style.opacity = 1;
        cap.style.transform = 'translateY(0)';
      });
    });
  }
}

// --------------------
// Dynamic page loader (with all effects)
// --------------------
document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    { id: "about", url: "about.html" },
    { id: "counselors", url: "counselors.html" },
    { id: "services", url: "services.html" },
    { id: "media", url: "media.html" },
    { id: "contact", url: "contact.html" }
  ];

  const container = document.getElementById("page-content");

  const loadPage = (page) => {
    return fetch(page.url)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const sections = doc.querySelectorAll("section");
        sections.forEach(sec => {
          container.appendChild(sec);
        });

        // Refresh effects
        if (typeof AOS !== "undefined") AOS.refreshHard();
        if (window.__serenityParallax) {
          window.__serenityParallax.computeInitialTops();
          window.__serenityParallax.updateParallax();
        }
        if (window.bootstrap) {
          document.querySelectorAll('.carousel').forEach(el => {
            new bootstrap.Carousel(el, { interval: 5000 });
          });
          initCarouselCaptions();
        }
      });
  };

  // Sequentially load pages
  pages.reduce((p, page) => p.then(() => loadPage(page)), Promise.resolve())
       .then(() => {
           initAOS(); // existing
           initCounselorBioNavigation(); // <-- NEW function you add for prev/next buttons
       });
});

// ----------------------------
// Counselor Profile Navigation
// ----------------------------

function initCounselorBioNavigation() {
  const profiles = document.querySelectorAll('.counselor-profile-page');
  if (!profiles.length) return;

  let currentIndex = 0;

  function showProfile(index) {
    profiles.forEach(profile => profile.classList.remove('active'));
    profiles[index].classList.add('active');
  }

  const prevBtn = document.getElementById('prevCounselor');
  const nextBtn = document.getElementById('nextCounselor');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
      showProfile(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % profiles.length;
      showProfile(currentIndex);
    });
  }

  showProfile(currentIndex);
}

