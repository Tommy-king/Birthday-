// 🎬 Typing cinematic intro
const text = "Hey Nibedita 💖...";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("main").style.display = "block";
    }, 1000);
  }
}

typeEffect();


// 🎥 AUTO SLIDESHOW
const slides = [
  "images/r1.png",
  "images/r2.png",
  "images/r3.png",
  "images/r4.png",
  "images/r5.jpg"
];

let index = 0;

function startSlideshow() {
  setInterval(() => {
    index = (index + 1) % slides.length;
    document.getElementById("slide").src = slides[index];
  }, 2000);
}


// 📖 FLIPBOOK EFFECT
const pages = document.querySelectorAll(".page");

let current = 0;

function flipPages() {
  setInterval(() => {
    pages[current].style.transform = "rotateY(180deg)";
    current = (current + 1) % pages.length;
  }, 2000);
}


// 🎂 BLOW CANDLE (click simulation)
function blowCandle() {
  document.getElementById("flame").style.display = "none";

  confetti({
    particleCount: 200,
    spread: 100
  });
}


// 🎉 START EVERYTHING
function startShow() {
  document.getElementById("music").play();
  startSlideshow();
  flipPages();

  confetti({
    particleCount: 300,
    spread: 150
  });
}
