// Simple Slider Logic inspired by the reference website
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span");
let current = 0;
let slideInterval = setInterval(nextSlide, 4800);

function showSlide(n) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === n);
    if (dots[idx]) dots[idx].classList.toggle('active', idx === n);
  });
  current = n;
}

// Next/Prev
function nextSlide() {
  let n = (current + 1) % slides.length;
  showSlide(n);
}
function prevSlide() {
  let n = (current - 1 + slides.length) % slides.length;
  showSlide(n);
}
function changeSlide(direction) {
  clearInterval(slideInterval);
  direction === 1 ? nextSlide() : prevSlide();
  slideInterval = setInterval(nextSlide, 4800);
}
function currentSlide(n) {
  clearInterval(slideInterval);
  showSlide(n - 1);
  slideInterval = setInterval(nextSlide, 4800);
}

// Dots binding
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => currentSlide(idx + 1));
});

// Arrow key navigation (bonus)
window.addEventListener('keydown', (e) => {
  if (e.key === "ArrowRight") changeSlide(1);
  if (e.key === "ArrowLeft") changeSlide(-1);
});

// Init
showSlide(current);
