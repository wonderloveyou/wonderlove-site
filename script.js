
document.getElementById("overlay").addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  const panel = document.getElementById("link-panel");
  const video = document.getElementById("bg-video");
  const clickSound = document.getElementById("click-sound");

  if (clickSound) clickSound.play();
  if (video) {
    video.muted = false;
    video.play();
  }

  overlay.classList.add("fade-out");
  setTimeout(() => {
    overlay.style.display = "none";
    panel.classList.add("visible");
  }, 1000);
});

document.querySelectorAll(".link-btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    const hoverSound = document.getElementById("hover-sound");
    if (hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
