

// ====== Starfield with Shooting Stars ======
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
let shootingStars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create stars
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
}

// Shooting stars
function createShootingStar() {
  shootingStars.push({
    x: Math.random() * canvas.width,
    y: 0,
    length: Math.random() * 80 + 100,
    speed: Math.random() * 8 + 6,
    opacity: 1
  });
}

function drawShootingStars() {
  for (let i = 0; i < shootingStars.length; i++) {
    let s = shootingStars[i];
    ctx.strokeStyle = `rgba(255,255,255,${s.opacity})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - s.length, s.y + s.length);
    ctx.stroke();
    s.x += -s.speed;
    s.y += s.speed;
    s.opacity -= 0.02;
    if (s.opacity <= 0) shootingStars.splice(i, 1);
  }
}

// Animation loop
function animate() {
  drawStars();
  if (Math.random() < 0.01) createShootingStar();
  drawShootingStars();
  requestAnimationFrame(animate);
}
animate();
// ====== Contact Form Submission ======
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  alert("✅ Thank you! Your message has been received.");
  contactForm.reset();
});

