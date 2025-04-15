
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
    panel.classList.remove("hidden");
    panel.classList.add("visible");
  }, 1000);
});
