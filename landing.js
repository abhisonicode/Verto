const carouselContainer = document.querySelector(".carousel-container");
let isDown = false;
let startX;
let scrollLeft;

const startDragging = (e) => {
  isDown = true;
  startX = e.pageX || e.touches[0].pageX - carouselContainer.offsetLeft;
  scrollLeft = carouselContainer.scrollLeft;
};

const stopDragging = () => {
  isDown = false;
};

const drag = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = (e.pageX || e.touches[0].pageX) - carouselContainer.offsetLeft;
  const walk = (x - startX) * 1.5;
  carouselContainer.scrollLeft = scrollLeft - walk;
};

carouselContainer.addEventListener("mousemove", drag);
carouselContainer.addEventListener("touchmove", drag);
carouselContainer.addEventListener("mousedown", startDragging);
carouselContainer.addEventListener("mouseleave", stopDragging);
carouselContainer.addEventListener("mouseup", stopDragging);
carouselContainer.addEventListener("touchstart", startDragging);
carouselContainer.addEventListener("touchend", stopDragging);
