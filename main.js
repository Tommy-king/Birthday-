function startExperience() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("reel").style.display = "block";

  document.getElementById("music").play();

  startReel();
}


// 🎥 Reel Auto Scroll
function startReel() {
  const frames = document.querySelectorAll(".frame");
  let index = 0;

  function showNext() {
    if (index < frames.length) {
      frames[index].scrollIntoView({ behavior: "smooth" });
      index++;
      setTimeout(showNext, 5000);
    } else {
      document.querySelector(".final").scrollIntoView({ behavior: "smooth" });
    }
  }

  showNext();
}


// 🎉 Final Celebration
function celebrate() {
  confetti({
    particleCount: 400,
    spread: 160
  });
}
