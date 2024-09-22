document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const dots = document.querySelectorAll('.dot');
    const slideInterval = 3000;
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.hero').length;
  
    if (!carouselInner || dots.length === 0 || totalSlides === 0) {
      console.error('Carousel components are missing or not properly set up.');
      return;
    }
  
    function goToSlide(index, immediate = false) {
      if (index < 0 || index >= totalSlides) return; // Check index bounds
      currentSlide = index;
      const offset = -index * 100;
  
      if (immediate) {
        carouselInner.style.transition = 'none'; // Disable transition for immediate jump
        carouselInner.style.transform = `translateX(${offset}vw)`;
        setTimeout(() => {
          carouselInner.style.transition = ''; // Re-enable transition
        }, 500); // Set timeout to re-enable transition immediately
      } else {
        requestAnimationFrame(() => {
          carouselInner.style.transform = `translateX(${offset}vw)`;
        });
      }
  
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  
    function nextSlide() {
      if (currentSlide === totalSlides - 1) {
        // Special case: Directly jump to the first slide from the last one
        goToSlide(0, true); // Immediate jump without transition
      } else {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
      }
    }
  
    // Initialize the carousel
    goToSlide(currentSlide);
    const slideIntervalId = setInterval(nextSlide, slideInterval);
  
    // Add event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
      dot.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          goToSlide(index);
        }
      });
    });
  
    // Clean up interval on page unload
    window.addEventListener('beforeunload', () => {
      clearInterval(slideIntervalId);
    });
  });
  