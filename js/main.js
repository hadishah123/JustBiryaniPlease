document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const dots = document.querySelectorAll(".dot");
  const slideInterval = 3000;
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".hero").length;

  if (!carouselInner || dots.length === 0 || totalSlides === 0) {
    console.error("Carousel components are missing or not properly set up.");
    return;
  }

  function goToSlide(index, immediate = false) {
    if (index < 0 || index >= totalSlides) return;
    currentSlide = index;
    const offset = -index * 100;

    if (immediate) {
      carouselInner.style.transition = "none";
      carouselInner.style.transform = `translateX(${offset}vw)`;
      setTimeout(() => {
        carouselInner.style.transition = "";
      }, 500);
    } else {
      requestAnimationFrame(() => {
        carouselInner.style.transform = `translateX(${offset}vw)`;
      });
    }

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() {
    if (currentSlide === totalSlides - 1) {
      goToSlide(0, true);
    } else {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }
  }
  goToSlide(currentSlide);
  const slideIntervalId = setInterval(nextSlide, slideInterval);
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
    dot.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        goToSlide(index);
      }
    });
  });
  window.addEventListener("beforeunload", () => {
    clearInterval(slideIntervalId);
  });
});

// Review Carousel start
let currentReviewSlide = 0;
const reviewSlides = document.querySelectorAll(".review-slide");
let slideInterval;

function showSlide(index) {
  reviewSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentReviewSlide = (currentReviewSlide + 1) % reviewSlides.length;
  showSlide(currentReviewSlide);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 2000);
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

showSlide(currentReviewSlide);
startSlideshow();

const slideshowContainer = document.querySelector(".review-carousel");

slideshowContainer.addEventListener("mouseenter", stopSlideshow);
slideshowContainer.addEventListener("mouseleave", startSlideshow);

// Review Carousel end

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom >= 0 &&
    rect.left < window.innerWidth &&
    rect.right >= 0
  );
}

function handleScroll() {
  const elements = document.querySelectorAll(".animateToRight");
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}
function handleScroll2() {
  const elements = document.querySelectorAll(".animateToBottm");
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}
function handleScroll4() {
  const elements = document.querySelectorAll(".animateToTop");
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}
function handleScroll3() {
  const elements = document.querySelectorAll(".animateToLeft");
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", handleScroll2);
window.addEventListener("scroll", handleScroll3);
window.addEventListener("scroll", handleScroll4);
document.addEventListener("DOMContentLoaded", handleScroll);

console.log('%cMade with ❤️ by DesignFrnd!', 'color: white; font-size: 20px; font-weight: bold; border:2px solid white; padding:1rem; border-radius:0 25px;');

function checkMobileScreen() {
  let body = document.body;
  if (window.innerWidth <= 1000) {
    body.innerHTML = "<h1>Please use a larger screen to view this website.</h1>";
    body.style.textAlign = "center";
    body.style.padding = "20px";
    body.style.fontSize = "1.5rem";
  } else {
    body.style.textAlign = "";
    body.style.padding = "";
    body.style.fontSize = "";
  }
}

window.addEventListener('load', checkMobileScreen);

window.addEventListener('resize', checkMobileScreen);
