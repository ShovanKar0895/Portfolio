document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Add shadow when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shadow-xl", "bg-gray-900/90");
    } else {
      header.classList.remove("shadow-xl", "bg-gray-900/90");
    }
  });
});

// Lottie loader
lottie.loadAnimation({
  container: document.getElementById("lottie-loader"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json"
});

// Fade out preloader once page fully loads
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("opacity-0", "pointer-events-none");

  // Match Tailwind transition duration (500ms)
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      // Reset all buttons
      tabButtons.forEach((b) => {
        b.classList.remove("active","bg-indigo-600","text-white");
        b.classList.add("bg-gray-800","text-gray-300");
      });

      // Hide all contents
      tabContents.forEach((c) => c.classList.add("hidden"));

      // Activate this button
      btn.classList.add("active","bg-indigo-600","text-white");
      btn.classList.remove("bg-gray-800","text-gray-300");

      // Show matching content
      document.getElementById(target).classList.remove("hidden");
    });
  });
});
