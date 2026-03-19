// Image Slideshow (Auto transition every 3 seconds)
let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Function to change slides automatically
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto change slides every 3 seconds
setInterval(showNextSlide, 3000);

// Fix for Background Music
const music = document.getElementById('birthday-music');
music.volume = 0.5;  // Set volume to 50%
if (music.paused) {
    music.play();
}

// Create Stars
function createStars() {
    const numStars = 20; // Number of stars to generate
    const starContainer = document.querySelector('.stars');
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration for each star
        star.style.animationDelay = `${Math.random() * 3}s`; // Random delay
        star.style.setProperty('--i', i);  // Custom property for animation delay
        starContainer.appendChild(star);
    }
}

// Create Circles
function createCircles() {
    const numCircles = 10; // Number of circles to generate
    const circleContainer = document.querySelector('.circles');
    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 6 + 6}s`; // Random duration for each circle
        circle.style.animationDelay = `${Math.random() * 2}s`; // Random delay
        circle.style.setProperty('--i', i); // Custom property for animation delay
        circleContainer.appendChild(circle);
    }
}

// Initialize Stars and Circles
createStars();
createCircles();

// Slideshow code to transition images
let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto change slides every 3 seconds
setInterval(showNextSlide, 3000);

// Ensure background music plays properly
window.onload = () => {
    const music = document.getElementById('birthday-music');
    music.play();
};

// Listen for when the audio is paused
const music = document.getElementById('birthday-music');
music.onpause = () => {
    console.log("Background music is paused");
};
