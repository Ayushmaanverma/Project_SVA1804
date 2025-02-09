let currentSlide = 0;
const slides = document.querySelector(".onboarding-wrapper");
const dots = document.querySelectorAll(".dot");

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function nextSlide() {
    if (currentSlide < 2) {
        currentSlide++;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }
}
