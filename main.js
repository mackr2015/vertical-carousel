const track = document.querySelector('.track');
let slides = Array.from(track.children);

// --- CLONE SLIDES FOR SEAMLESS SCROLL ---
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

// After cloning, recalc slides including clones
slides = Array.from(track.children);

// Select all images (original + clones)
const allImages = track.querySelectorAll('img');



// --- CONTINUOUS UPWARD SCROLL ---
let speed = 0.5; // pixels per frame
let position = 0;

// Calculate total height of original slides (before cloning)
const originalHeight = slides.slice(0, slides.length / 2)
                             .reduce((sum, slide) => sum + slide.offsetHeight, 0);

function animate() {
  position += speed;

  // seamless reset when original content height is passed
  if (position >= originalHeight) {
    position -= originalHeight;
  }

  track.style.transform = `translateY(-${position}px)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);