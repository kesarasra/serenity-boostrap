// === Hamburger toggle ===
const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

// Function to open menu
const openMenu = () => hamburgerMenu.classList.add("show");
// Function to close menu
const closeMenu = () => hamburgerMenu.classList.remove("show");

// Detect if the device supports hover (mouse/trackpad)
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ----- Hover effect for pointer devices -----
if (canHover) {
  hamburgerBtn.addEventListener("mouseenter", openMenu);
  hamburgerBtn.addEventListener("mouseleave", closeMenu);

  // Keep menu open when hovering over it
  hamburgerMenu.addEventListener("mouseenter", openMenu);
  hamburgerMenu.addEventListener("mouseleave", closeMenu);
}

// ----- Touch/click effect for mobile -----
hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent document click from closing immediately
  hamburgerMenu.classList.toggle("show");
});

// Close menu when clicking outside (works for both hover & touch)
document.addEventListener("click", (e) => {
  if (!hamburgerBtn.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    hamburgerMenu.classList.remove("show");
  }
});



// === Header scroll animation ===
let lastScrollY = window.scrollY;
const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    // Scrolling down → hide
    header.classList.add("hide-header");
    header.classList.remove("show-header");
  } else {
    // Scrolling up → show
    header.classList.add("show-header");
    header.classList.remove("hide-header");
  }
  lastScrollY = window.scrollY;
});


// Load page into #content
function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;

      // update URL hash (for back/forward navigation)
      window.location.hash = page;
    })
    .catch(err => console.error("Error loading page:", err));
}


function toggleMenu() {
  const menu = document.getElementById("sidebarMenu");
  if (menu.style.transform === "translateX(0%)") {
    menu.style.transform = "translateX(-100%)";
  } else {
    menu.style.transform = "translateX(0%)";
  }
}



// Initial load (default: home)
window.addEventListener("load", () => {
  const page = window.location.hash.substring(1) || "home";
  loadPage(page);
});

// Handle back/forward browser buttons
window.addEventListener("hashchange", () => {
  const page = window.location.hash.substring(1) || "home";
  loadPage(page);
});
