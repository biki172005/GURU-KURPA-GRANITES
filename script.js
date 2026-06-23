const canvas = document.getElementById('scroll-animation');
const context = canvas.getContext('2d');

const frameCount = 300;
const currentFrame = index => (
  `frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);

const images = [];

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
};

const updateImage = index => {
  if (images[index] && images[index].complete) {
    context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
  } else {
    // Fallback if not loaded yet
    const img = new Image();
    img.src = currentFrame(index);
    img.onload = () => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }
};

// Initial setup
preloadImages();

images[0].onload = function() {
  canvas.width = images[0].width;
  canvas.height = images[0].height;
  context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
};

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
  
  requestAnimationFrame(() => updateImage(frameIndex));
});
