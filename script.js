const canvas = document.getElementById('scroll-animation');
const context = canvas.getContext('2d');

const frameCount = 300;
const currentFrame = index => (
  `frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);

const images = [];
let currentFrameIndex = 0;
let lastFrameIndex = -1;

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
};

const renderImage = (img) => {
  if (!img || !img.complete) return;
  
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const canvasWidth = rect.width;
  const canvasHeight = rect.height;
  
  const targetWidth = Math.floor(canvasWidth * dpr);
  const targetHeight = Math.floor(canvasHeight * dpr);
  
  if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
    canvas.width = targetWidth;
    canvas.height = targetHeight;
  }
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  context.save();
  context.scale(dpr, dpr);
  
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';
  
  const imgRatio = img.width / img.height;
  const canvasRatio = canvasWidth / canvasHeight;
  let drawWidth, drawHeight;
  
  if (canvasRatio > imgRatio) {
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imgRatio;
  } else {
    drawWidth = canvasHeight * imgRatio;
    drawHeight = canvasHeight;
  }
  
  const x = (canvasWidth - drawWidth) / 2;
  const y = (canvasHeight - drawHeight) / 2;
  
  context.drawImage(img, x, y, drawWidth, drawHeight);
  context.restore();
};

const updateImage = index => {
  currentFrameIndex = index;
  const img = images[index];
  if (img && img.complete) {
    renderImage(img);
  } else {
    // Fallback if not loaded yet
    const fallbackImg = new Image();
    fallbackImg.src = currentFrame(index);
    fallbackImg.onload = () => {
      if (currentFrameIndex === index) {
        renderImage(fallbackImg);
      }
    };
  }
};

// Initial setup
preloadImages();

let initialized = false;
const init = () => {
  if (initialized) return;
  initialized = true;
  if (images[0]) {
    if (images[0].complete) {
      renderImage(images[0]);
    } else {
      images[0].onload = () => {
        renderImage(images[0]);
      };
    }
  }
};

// Handle window resizing
window.addEventListener('resize', () => {
  if (images[currentFrameIndex]) {
    renderImage(images[currentFrameIndex]);
  }
});

// Scroll event listener
window.addEventListener('scroll', () => {  
  const animSection = document.querySelector('.scroll-animation-section');
  if (!animSection) return;
  
  const sectionTop = animSection.offsetTop;
  const sectionHeight = animSection.offsetHeight;
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  let scrollFraction = 0;
  if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight - viewportHeight) {
    scrollFraction = (scrollPosition - sectionTop) / (sectionHeight - viewportHeight);
  } else if (scrollPosition > sectionTop + sectionHeight - viewportHeight) {
    scrollFraction = 1;
  }

  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );
  
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
      if (scrollFraction > 0.01) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '1';
      }
  }
  
  if (frameIndex !== lastFrameIndex) {
    lastFrameIndex = frameIndex;
    requestAnimationFrame(() => updateImage(frameIndex));
  }
});

// Run init once DOM content is fully loaded to ensure correct rect bounds
document.addEventListener('DOMContentLoaded', init);
// Run init immediately in case DOM is already parsed
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  init();
}

