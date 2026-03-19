// Image Slider (Auto transition every 3 seconds)
let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);

// Celebration Button Interaction
function celebrate() {
    // Show Balloons and Flowers
    createBalloons();
    createFlowers();
    // Add some confetti effect or any other fun animation
    alert("Let's Celebrate!!! 🎉");
}

// Create Balloons Animations
function createBalloons() {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animation = `floatBalloon ${Math.random() * 5 + 3}s linear infinite`;
        document.getElementById('balloon-container').appendChild(balloon);
    }
}

// Create Flower Animations
function createFlowers() {
    for (let i = 0; i < 5; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.animation = `floatFlower ${Math.random() * 5 + 3}s linear infinite`;
        document.getElementById('flower-container').appendChild(flower);
    }
}

// Optionally: Add event listener for window resize
window.addEventListener('resize', () => {
    // Handle resizing logic if necessary
});
