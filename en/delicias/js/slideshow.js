const intervals = new Map();

function startSlideshow(container) {
  const img = container.querySelector('img');
  const imageList = container.getAttribute('data-images').split(',');
  if (imageList.length <= 1) return;

  let index = 1;

  const interval = setInterval(() => {
    img.src = imageList[index];
    index = (index + 1) % imageList.length;
  }, 1600);

  intervals.set(container, { interval, originalSrc: imageList[0] });
}

function stopSlideshow(container) {
  const img = container.querySelector('img');
  const data = intervals.get(container);
  if (data) {
    clearInterval(data.interval);
    img.src = data.originalSrc;
    intervals.delete(container);
  }
}

// Añadir los eventos desde JS, mejor práctica que en el HTML
document.addEventListener('DOMContentLoaded', () => {
  const slideshows = document.querySelectorAll('.slideshow');
  slideshows.forEach(container => {
    container.addEventListener('mouseenter', () => startSlideshow(container));
    container.addEventListener('mouseleave', () => stopSlideshow(container));
  });
});
