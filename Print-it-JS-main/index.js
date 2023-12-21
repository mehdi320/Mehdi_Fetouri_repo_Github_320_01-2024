const banner = [
  {
    imageUrl: "./assets/images/slideshow/slide1.jpg",
    title: "en boutique et en ligne"
  },
  {
    imageUrl: "./assets/images/slideshow/slide2.jpg",
    title: "en boutique et en ligne"
  },
  {
    imageUrl: "./assets/images/slideshow/slide3.jpg",
    title: "en boutique et en ligne"
  },
  {
    imageUrl: "./assets/images/slideshow/slide4.png",
    title: "en boutique et en ligne"
  }
];

const dots = document.querySelector(".dots");
let index = 0;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");

function displayDots() {
  for (let i = 0; i < banner.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i === index) {
      dot.classList.add("dot_selected");
    }
  }
}

// Afficher le texte initial dans la balise <p>
p.innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>";

displayDots();

function clickRight() {
  arrowRight.addEventListener("click", () => {
    index++;
    if (index >= banner.length) {
      index = 0;
    }
    img.src = banner[index].imageUrl;
    p.innerHTML = `Impressions tous formats <span>${banner[index].title}</span>`;
    updateDots();
  });
}

function clickLeft() {
  arrowLeft.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = banner.length - 1;
    }
    img.src = banner[index].imageUrl;
    p.innerHTML = `Impressions tous formats <span>${banner[index].title}</span>`;
    updateDots();
  });
}



function updateDots() {
  const allDots = document.querySelectorAll(".dot");

  allDots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === index);
  });
}

clickRight();
clickLeft();
