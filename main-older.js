const track = document.querySelector('.track');

// Duplicate all slides once
track.innerHTML += track.innerHTML;

let speed = 0.8; // pixels per frame
let position = 0;

const totalHeight = track.scrollHeight / 2; 
// original content height (before duplication)

function animate() {
  position += speed;

  if (position >= totalHeight) {
    position -= totalHeight;
  }

  track.style.transform = `translateY(-${position}px)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);