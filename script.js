const burgerMenu = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navigation.classList.toggle("active");
});

document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navigation.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navigation.contains(e.target) && !burgerMenu.contains(e.target)) {
    burgerMenu.classList.remove("active");
    navigation.classList.remove("active");
  }
});

const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".gallery-item");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

function updateSliderPosition() {
  const itemWidth =
    items[0].offsetWidth + parseFloat(getComputedStyle(slider).gap);
  const visibleItems = window.innerWidth < 768 ? 1 : 3;
  slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

  leftArrow.style.display = currentIndex === 0 ? "none" : "block";
  rightArrow.style.display =
    currentIndex >= items.length - visibleItems ? "none" : "block";
}

leftArrow.addEventListener("click", () => {
  currentIndex = Math.max(0, currentIndex - 1);
  updateSliderPosition();
});

rightArrow.addEventListener("click", () => {
  const maxIndex = items.length - (window.innerWidth < 768 ? 1 : 3);
  currentIndex = Math.min(maxIndex, currentIndex + 1);
  updateSliderPosition();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({behavior: "smooth"});
  });
});
