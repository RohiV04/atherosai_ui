const events = document.getElementById("events");

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

events.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - events.offsetLeft;
  startY = e.pageY - events.offsetTop;
  scrollLeft = events.scrollLeft;
  scrollTop = events.scrollTop;
  events.style.cursor = "grabbing";
});

events.addEventListener("mouseleave", () => {
  isDown = false;
  events.style.cursor = "grab";
});

events.addEventListener("mouseup", () => {
  isDown = false;
  events.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - events.offsetLeft;
  const y = e.pageY - events.offsetTop;
  const walkX = (x - startX) * 1;
  const walkY = (y - startY) * 1;
  events.scrollLeft = scrollLeft - walkX;
  events.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById("action-button--previous");
const scrollRightButton = document.getElementById("action-button--next");

scrollLeftButton.addEventListener("click", () => {
  events.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  events.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
});

events.addEventListener("scroll", (e) => {
  const position = events.scrollLeft;
  if (position === 0) {
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.disabled = false;
  }

  if (Math.round(position) === events.scrollWidth - events.clientWidth) {
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.disabled = false;
  }
});
