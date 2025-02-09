document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("onboarding-container").style.display = "flex";
    }, 2000);
});

// Swipe Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".onboarding-slide");
const onboardingContainer = document.getElementById("onboarding-container");

onboardingContainer.addEventListener("touchstart", handleTouchStart, false);
onboardingContainer.addEventListener("touchmove", handleTouchMove, false);

let xStart = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    xStart = firstTouch.clientX;
}

function handleTouchMove(event) {
    if (!xStart) return;
    
    let xEnd = event.touches[0].clientX;
    let xDiff = xStart - xEnd;

    if (xDiff > 50) {  // Swipe left
        nextSlide();
    }
    xStart = null;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
    } else {
        document.getElementById("onboarding-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    }
}

function updateSlides() {
    onboardingContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
