/*$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!*/

//carousel personnes

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 2;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == 3) {
    next = 0;
  }

  if (prev == -1) {
    prev = 2;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
}
//carousel personnes

//carousel
  function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}

document.querySelector('#toggle-animation').addEventListener('click', classToggle);
//carousel