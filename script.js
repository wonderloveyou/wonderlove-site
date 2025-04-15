
document.getElementById("overlay").addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  const panel = document.getElementById("link-panel");

  overlay.classList.add("fade-out");
  setTimeout(() => {
    overlay.style.display = "none";
    panel.classList.remove("hidden");
    panel.classList.add("visible");
  }, 1000);
});
