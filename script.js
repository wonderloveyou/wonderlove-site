// Удаляем loader после загрузки
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = "none", 500);

  const panel = document.getElementById("link-panel");
  panel.classList.add("visible");
});

// Наведение — звук
document.querySelectorAll(".link-btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    const hoverSound = document.getElementById("hover-sound");
    if (hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});

// tsParticles для ника
tsParticles.load("particles-vander", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: { value: 40, density: { enable: false } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: 1.5 },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out"
    }
  },
  interactivity: {
    events: { onHover: { enable: false }, onClick: { enable: false } }
  },
  detectRetina: true
});

// Canvas-фон из Codepen KenChen
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let step = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const data = imageData.data;

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const offset = (y * canvas.width + x) * 4;
      const r = Math.floor(128 + 128 * Math.sin(x * 0.01 + step));
      const g = Math.floor(128 + 128 * Math.sin(y * 0.01 + step));
      const b = Math.floor(128 + 128 * Math.sin((x + y) * 0.01 + step));
      data[offset] = r;
      data[offset + 1] = g;
      data[offset + 2] = b;
      data[offset + 3] = 20; // прозрачность
    }
  }

  ctx.putImageData(imageData, 0, 0);
  step += 0.03;
  requestAnimationFrame(draw);
}
draw();
