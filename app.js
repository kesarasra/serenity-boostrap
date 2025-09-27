// === Hamburger toggle ===
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const hamburgerMenu = document.getElementById("hamburgerMenu");

  if (hamburgerBtn && hamburgerMenu) {
    // Function to open/close menu
    const openMenu = () => hamburgerMenu.classList.add("show");
    const closeMenu = () => hamburgerMenu.classList.remove("show");

    // Detect if device supports hover
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (canHover) {
      hamburgerBtn.addEventListener("mouseenter", openMenu);
      hamburgerBtn.addEventListener("mouseleave", closeMenu);
      hamburgerMenu.addEventListener("mouseenter", openMenu);
      hamburgerMenu.addEventListener("mouseleave", closeMenu);
    }

    // Touch/click toggle
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburgerMenu.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburgerBtn.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        hamburgerMenu.classList.remove("show");
      }
    });
  }

  // === Header scroll animation ===
  const header = document.getElementById("siteHeader");
  if (header) {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        header.classList.add("hide-header");
        header.classList.remove("show-header");
      } else {
        header.classList.add("show-header");
        header.classList.remove("hide-header");
      }
      lastScrollY = window.scrollY;
    });
  }

  // === Page load via #hash ===
  const contentContainer = document.getElementById("content");
  function loadPage(page) {
    if (!contentContainer) return;

    fetch(`pages/${page}.html`)
      .then(res => res.text())
      .then(data => {
        contentContainer.innerHTML = data;
        window.location.hash = page;
      })
      .catch(err => console.error("Error loading page:", err));
  }

  // Initial load
  const initialPage = window.location.hash.substring(1) || "home";
  loadPage(initialPage);

  // Handle back/forward buttons
  window.addEventListener("hashchange", () => {
    const page = window.location.hash.substring(1) || "home";
    loadPage(page);
  });
});
