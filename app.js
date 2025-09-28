// === App.js - Fully Fixed Version ===
window.addEventListener("load", () => {
  const header = document.getElementById("siteHeader");
  const contentContainer = document.getElementById("content");

  // --- Hamburger Menu Init ---
  function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    if (!hamburgerBtn || !hamburgerMenu) return;

    const openMenu = () => hamburgerMenu.classList.add("show");
    const closeMenu = () => hamburgerMenu.classList.remove("show");

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canHover) {
      hamburgerBtn.addEventListener("mouseenter", openMenu);
      hamburgerBtn.addEventListener("mouseleave", closeMenu);
      hamburgerMenu.addEventListener("mouseenter", openMenu);
      hamburgerMenu.addEventListener("mouseleave", closeMenu);
    }

    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburgerMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!hamburgerBtn.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // --- Header Scroll Animation ---
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

  // --- Page Load via Hash ---
  function loadPage(page) {
    if (!contentContainer) return;

    fetch(`pages/${page}.html`)
      .then(res => res.text())
      .then(data => {
        contentContainer.innerHTML = data;
        window.location.hash = page;

        // Re-initialize hamburger menu after page content changes
        initHamburgerMenu();
      })
      .catch(err => console.error("Error loading page:", err));
  }

  // --- Initial Load ---
  const initialPage = window.location.hash.substring(1) || "home";
  loadPage(initialPage);

  // --- Hash Change Handling ---
  window.addEventListener("hashchange", () => {
    const page = window.location.hash.substring(1) || "home";
    loadPage(page);
  });

  // --- Init Hamburger Menu on first load ---
  initHamburgerMenu();

  // --- Optional: Init Rellax + AOS ---
  if (window.Rellax) {
    new Rellax(".rellax");
  }
  if (window.AOS) {
    AOS.init();
  }
});
