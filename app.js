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
