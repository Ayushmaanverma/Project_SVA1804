document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("welcome-screen").style.display = "flex";
        
        setTimeout(() => {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("onboarding-container").style.display = "flex";
        }, 2000);
        
    }, 2000);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".onboarding-slide");

document.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
    } else {
        document.getElementById("onboarding-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
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
