// 🎬 Netflix intro
setTimeout(() => {
  document.getElementById("netflix").style.display = "none";
}, 2500);

// 💖 Typing intro
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


// 🎥 Cinematic Album
const cinemaData = [
  { img: "images/r1.png", text: "The beginning of beautiful memories 💖" },
  { img: "images/r2.png", text: "Your smile makes everything better 😊" },
  { img: "images/r3.png", text: "Moments I’ll always cherish ✨" },
  { img: "images/r4.png", text: "You are truly special 🌸" },
  { img: "images/r5.jpg", text: "A beautiful soul 💫" }
];

let cIndex = 0;

function startCinematic() {
  const img = document.getElementById("cinema-img");
  const caption = document.getElementById("caption");

  setInterval(() => {
    img.style.animation = "none";
    void img.offsetWidth;
    img.style.animation = "zoomEffect 6s linear";

    img.src = cinemaData[cIndex].img;
    caption.innerText = cinemaData[cIndex].text;
    caption.style.opacity = 1;

    setTimeout(() => {
      caption.style.opacity = 0;
    }, 4000);

    cIndex = (cIndex + 1) % cinemaData.length;
  }, 6000);
}


// 🎤 Mic Blow Candle
async function startMicBlow() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const audioContext = new AudioContext();
  const mic = audioContext.createMediaStreamSource(stream);
  const analyser = audioContext.createAnalyser();

  mic.connect(analyser);
  const data = new Uint8Array(analyser.frequencyBinCount);

  function detect() {
    analyser.getByteFrequencyData(data);
    let volume = data.reduce((a, b) => a + b) / data.length;

    if (volume > 60) {
      document.getElementById("flame").style.display = "none";

      confetti({
        particleCount: 200,
        spread: 120
      });

      stream.getTracks().forEach(t => t.stop());
    }

    requestAnimationFrame(detect);
  }

  detect();
}


// 💫 Floating Hearts
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);
}


// 🎉 Start Show
function startShow() {
  document.getElementById("music").play();

  startCinematic();
  createHearts();

  confetti({
    particleCount: 300,
    spread: 150
  });
}
