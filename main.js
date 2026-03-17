// 🎬 Typing Effect
const text = "Hey Nibedita 💖...";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
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


// 📸 Image Viewer
const images = document.querySelectorAll(".album img");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");

images.forEach(img => {
  img.onclick = () => {
    viewer.style.display = "flex";
    viewerImg.src = img.src;
  };
});

function closeViewer() {
  viewer.style.display = "none";
}


// 🎆 Party Mode
function startParty() {
  document.getElementById("bgMusic").play();

  confetti({
    particleCount: 200,
    spread: 120
  });

  createHearts();
}


// 💖 Floating Hearts
function createHearts() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  function Heart() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
  }

  Heart.prototype.draw = function () {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };

  Heart.prototype.update = function () {
    this.y -= this.speed;
  };

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.1) {
      hearts.push(new Heart());
    }

    hearts.forEach((h, i) => {
      h.update();
      h.draw();
      if (h.y < 0) hearts.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  animate();
}
