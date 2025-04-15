
document.getElementById("overlay").addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  const panel = document.getElementById("link-panel");
  const clickSound = document.getElementById("click-sound");

  if (clickSound) {
    clickSound.volume = 0.7;
    clickSound.play();
  }

  overlay.classList.add("fade-out");
  setTimeout(() => {
    overlay.style.display = "none";
    panel.classList.remove("hidden");
    panel.classList.add("visible");
  }, 1000);
});
