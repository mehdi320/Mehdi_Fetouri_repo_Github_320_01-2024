const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dots = document.querySelector(".dots");
let index = 0;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const textBanner = document.querySelector("#banner p");

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i === index) {
      dot.classList.add("dot_selected");
    }
  }
}

createDots();

arrowRight.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateBannerTitleAndImage();
  updateCurrentDot();
});

arrowLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  updateBannerTitleAndImage();
  updateCurrentDot();
});

function updateBannerTitleAndImage() {
  img.src = `./assets/images/slideshow/${slides[index].image}`;
  textBanner.innerHTML = slides[index].tagLine;
}

function updateCurrentDot() {
  const allDots = document.querySelectorAll(".dot");

  allDots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === index);
  });
}
