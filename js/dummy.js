window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";

  setTimeout(() => {
    preloader.remove();
  }, 400);
});

window.addEventListener("load", () => {
  const container = document.getElementById("typewriter");
  if (!container) return;

  const text = container.dataset.text;
  const textEl = container.querySelector(".typed-text");

  let index = 0;
  textEl.textContent = "";

  function type() {
    if (index < text.length) {
      textEl.textContent += text.charAt(index++);
      const delay = 80 + Math.random() * 60;
      setTimeout(type, delay);
    }
  }

  setTimeout(type, 400);
});

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");
    const nameErr = document.getElementById("nameError");
    const emailErr = document.getElementById("emailError");
    const msgErr = document.getElementById("messageError");
    const success = document.getElementById("formSuccess");

    nameErr.classList.add("hidden");
    emailErr.classList.add("hidden");
    msgErr.classList.add("hidden");
    success.classList.add("hidden");

    if (!name.value.trim() || name.value.trim().length < 2) {
      nameErr.textContent = "Name must be at least 2 characters.";
      nameErr.classList.remove("hidden");
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      emailErr.textContent = "Please enter a valid email address.";
      emailErr.classList.remove("hidden");
      valid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      msgErr.textContent = "Message must be at least 10 characters.";
      msgErr.classList.remove("hidden");
      valid = false;
    }

    if (valid) {
      success.classList.remove("hidden");
      form.reset();
    }
  });
});

// Active Nav Link Highlight (scroll-based)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === "#" + id) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
});

// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.remove("opacity-0", "invisible", "translate-y-4");
      btn.classList.add("opacity-100", "visible", "translate-y-0");
    } else {
      btn.classList.add("opacity-0", "invisible", "translate-y-4");
      btn.classList.remove("opacity-100", "visible", "translate-y-0");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Projects Auto-Slide
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("projectCarousel");
  if (!carousel) return;

  let autoSlideInterval;
  const SLIDE_DELAY = 4000;

  function getCardWidth() {
    const card = carousel.querySelector(".project-card");
    if (!card) return 300;
    return card.offsetWidth + 24; // card width + gap
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScroll - 10) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: getCardWidth(), behavior: "smooth" });
      }
    }, SLIDE_DELAY);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);
  carousel.addEventListener("touchstart", stopAutoSlide, { passive: true });
  carousel.addEventListener("touchend", () => {
    setTimeout(startAutoSlide, 1000);
  });

  startAutoSlide();
});

// Academic Modal: Scroll-linked milestone navigation
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("academicScroll");
  const navContainer = document.getElementById("academicNav");
  if (!scrollContainer || !navContainer) return;

  const navButtons = navContainer.querySelectorAll(".academic-nav-btn");
  const milestones = scrollContainer.querySelectorAll(".academic-milestone");

  // Click navigation: scroll to milestone
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-milestone");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Scroll-linked highlighting
  function updateActiveNav() {
    const containerTop = scrollContainer.scrollTop;
    const containerHeight = scrollContainer.clientHeight;
    let activeIndex = 0;

    milestones.forEach((milestone, index) => {
      const milestoneTop = milestone.offsetTop - scrollContainer.offsetTop;
      if (containerTop >= milestoneTop - containerHeight * 0.3) {
        activeIndex = index;
      }
    });

    navButtons.forEach((btn, index) => {
      if (index === activeIndex) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  scrollContainer.addEventListener("scroll", updateActiveNav, { passive: true });
});

// Projects Drag Support
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("projectCarousel");
  if (!carousel) return;

  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    scrollStart = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
    carousel.style.scrollSnapType = "none";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    carousel.scrollLeft = scrollStart - diff;
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.cursor = "";
    carousel.style.scrollSnapType = "x mandatory";
  };

  carousel.addEventListener("mouseup", endDrag);
  carousel.addEventListener("mouseleave", endDrag);
});

// Section Fade-in on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  sections.forEach((section) => observer.observe(section));
});

// Testimonials Drag Interaction
document.addEventListener("DOMContentLoaded", () => {
  const strip = document.getElementById("testimonialStrip");
  if (!strip) return;

  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;

  function getTranslateX() {
    const style = window.getComputedStyle(strip);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
  }

  function onDragStart(e) {
    isDragging = true;
    startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    currentTranslate = getTranslateX();
    strip.style.animationPlayState = "paused";
    strip.style.cursor = "grabbing";
  }

  function onDragMove(e) {
    if (!isDragging) return;
    const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const diff = x - startX;
    strip.style.transform = `translateX(${currentTranslate + diff}px)`;
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    strip.style.cursor = "";
    strip.style.removeProperty("transform");
    strip.style.animationPlayState = "";
  }

  strip.addEventListener("mousedown", onDragStart);
  strip.addEventListener("mousemove", onDragMove);
  strip.addEventListener("mouseup", onDragEnd);
  strip.addEventListener("mouseleave", onDragEnd);
  strip.addEventListener("touchstart", onDragStart, { passive: true });
  strip.addEventListener("touchmove", onDragMove, { passive: true });
  strip.addEventListener("touchend", onDragEnd);
});
