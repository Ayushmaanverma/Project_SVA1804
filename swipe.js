document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("onboarding-container").style.display = "block";
    }, 2000);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".onboarding-slide");

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xStart = null;

function handleTouchStart(event) {
    xStart = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!xStart) return;

    const xEnd = event.touches[0].clientX;
    const xDiff = xStart - xEnd;

    if (xDiff > 50) {
        goToNextSlide();
    }

    xStart = null;
}

function goToNextSlide() {
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].style.transform = `translateX(-100%)`;
        currentSlide++;
    } else {
        document.getElementById("onboarding-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    }
}
