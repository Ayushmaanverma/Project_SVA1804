document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("onboarding-container").style.display = "flex";
    }, 3000);
});

let currentSlide = 0;
const slides = document.querySelector(".onboarding-wrapper");
const dots = document.querySelectorAll(".dot");

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

// Swipe Gesture Handling
let startX = 0;

document.getElementById("onboarding-container").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.getElementById("onboarding-container").addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let difference = startX - endX;

    if (difference > 50) { // Swipe left
        nextSlide();
    }
});

function nextSlide() {
    if (currentSlide < 2) {
        currentSlide++;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    } else {
        // Move to Login
        document.getElementById("onboarding-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    }
}