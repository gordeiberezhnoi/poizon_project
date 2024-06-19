const burger = document.getElementById("burger"),
      navigation = document.querySelector(".navigation"),
      overlay = document.querySelector('.overlay'),
      filter = document.querySelectorAll('.filters-list__item')
      filterText = document.querySelectorAll(".filters-list__item-text"),

document.addEventListener("DOMContentLoaded", burgerClick)

function burgerClick() {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('open'); 
    document.querySelector("header").classList.toggle('open');
    overlay.classList.toggle('open');
  });
}

const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.arrows_back');
const arrowRight = document.querySelector('.arrows_forward');
const slides = document.querySelectorAll('.slider__element');

let currentPosition = 0;
const maxPosition = slides.length - 4; // Максимальная позиция для слайдера (8 элементов - 4 видимых = 4)

console.log(arrowRight, arrowLeft)

arrowRight.addEventListener('click', () => {
  if (currentPosition < maxPosition) { // Проверяем, не достигли ли конца
    currentPosition++;
    slider.style.transform = `translateX(-${currentPosition * 345}px)`;
  }
});

arrowLeft.addEventListener('click', () => {
  if (currentPosition > 0) { // Проверяем, не в начале ли слайдера
    currentPosition--;
    slider.style.transform = `translateX(-${currentPosition * 345}px)`;
  }
});