const leftButton = document.querySelector(".fa-angle-left");
const rightButton = document.querySelector(".fa-angle-right");
const carousel = document.querySelector(".crousel");

const cards = document.querySelectorAll(".crousel .cards");

const cardWidth = cards[0].offsetWidth + 25;
let currentIndex = 0;
const scrollCarousel = (direction) => {
  if (direction === "right") {
    currentIndex++;
    if (currentIndex >= cards.length) {
      currentIndex = 0;
      carousel.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }
  } else if (direction === "left") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = cards.length - 1;
      carousel.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
      return;
    }
  }

  carousel.scrollTo({
    left: cardWidth * currentIndex,
    behavior: "smooth",
  });
};

leftButton.addEventListener("click", () => {
  scrollCarousel("left");
});

rightButton.addEventListener("click", () => {
  scrollCarousel("right");
});
