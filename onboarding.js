document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none"; // Hide loading screen
        document.getElementById("onboarding-container").style.display = "flex"; // Show onboarding
    }, 2000);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".onboarding-slide");

// Swipe Left Simulation (Manual for Now)
document.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
    } else {
        document.getElementById("onboarding-container").style.display = "none"; // Hide onboarding
        document.getElementById("login-container").style.display = "block"; // Show login
    }
});

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function startSignUp() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("auth-container").style.display = "block";
}
