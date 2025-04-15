
document.getElementById("overlay").addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  const panel = document.getElementById("link-panel");
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
    panel.classList.remove("hidden");
    panel.classList.add("visible");
  }, 1000);
});
