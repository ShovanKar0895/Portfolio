document.addEventListener("DOMContentLoaded", () => {
  // const header = document.querySelector("header");

  const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("shadow-xl", "bg-[#0d1117]/95");
  } else {
    header.classList.remove("shadow-xl", "bg-[#0d1117]/95");
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

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 2 },
    },
  });

window.addEventListener("load", () => {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const text = "Shovan Kar";
  let index = 0;
  el.textContent = "";

  function type() {
    if (index < text.length) {
      el.textContent += text[index];
      index++;
      setTimeout(type, 120);
    }
  }

  type();
});

