// Image Slideshow (Auto transition every 3 seconds)
let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto change slides every 3 seconds
setInterval(showNextSlide, 3000);

// Music fix (if needed)
const music = document.getElementById('birthday-music');
if (music.paused) {
    music.play();
}
