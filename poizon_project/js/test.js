const burger = document.getElementById("burger"),
      navigation = document.querySelector(".navigation"),
      overlay = document.querySelector('.overlay'),
      filter = document.querySelectorAll('.filters-list__item')
      filterText = document.querySelectorAll(".filters-list__item-text"),
      // brand = document.getElementById('brand'),
      // selectCost = document.getElementById('select-cost'),
      // size = document.getElementById('size'),
      // filtersBrand = document.querySelector('.filters-list__item_brand'),
      // filtersSize = document.querySelector('.filters-list__item_size'),
      // filtersCost = document.querySelector('.filters-list__item_cost'),
      // main = document.querySelector("main"),
      // filtersButton = document.querySelector('.filters-ready-button')
      // redCross = document.querySelectorAll('.red-cross')
      // backArrow = document.querySelector('.back-arrow')
      // forwardArrow = document.querySelector('.forward-arrow')
      // sneakersPageOne = document.querySelector('.sneakers_page1')
      // sneakersPageTwo = document.querySelector('.sneakers_page2')
      // selectCostReadyButton = document.querySelector('.ready-button')
      // questions = document.querySelectorAll('.question')

document.addEventListener("DOMContentLoaded", burgerClick)
// document.addEventListener("DOMContentLoaded", filterClick)
// document.addEventListener("DOMContentLoaded", filtersReadyButtonClick)
// document.addEventListener("DOMContentLoaded", redCrossClick)
// document.addEventListener("DOMContentLoaded", arrowClick)
// document.addEventListener("DOMContentLoaded", selectCostReadyButtonClick)
// document.addEventListener("DOMContentLoaded", questionClick)

function burgerClick() {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('open'); 
    document.querySelector("header").classList.toggle('open');
    overlay.classList.toggle('open');
  });
}

// function filterClick() {
//   filter.forEach((item, index) => { 
//     item.addEventListener('click', () => {
//       filterCallbacks[index](item);
//     });
//   });
// }

// const filterCallbacks = [
//   (item) => {
//     item.classList.toggle('active'); 
//     filtersBrand.classList.toggle('filter-active');
//     filtersCost.classList.toggle('filter-active');
//     filtersSize.classList.toggle('filter-active');
//     brand.classList.remove('active');
//     selectCost.classList.remove('active');
//     size.classList.remove('active')
//   },

//   (item) => { 
//     item.classList.toggle('filter1-active'); 
//     brand.classList.toggle('active')
//     selectCost.classList.remove('active')
//     size.classList.remove('active')
//     filtersSize.classList.remove('filter2-active');
//     filtersCost.classList.remove('filter3-active');
//   },
//   (item) => { 
//     item.classList.toggle('filter2-active'); 
//     size.classList.toggle('active')
//     brand.classList.remove('active')
//     selectCost.classList.remove('active')
//     filtersBrand.classList.remove('filter1-active');
//     filtersCost.classList.remove('filter3-active');
//   },

//   (item) => { 
//     item.classList.toggle('filter3-active'); 
//     selectCost.classList.toggle('active')
//     size.classList.remove('active')
//     brand.classList.remove('active')
//     filtersBrand.classList.remove('filter1-active');
//     filtersSize.classList.remove('filter2-active');
//   },
// ];

// function filtersReadyButtonClick() {
//   filtersButton.addEventListener('click', () => {
//     brand.classList.remove('active')
//     selectCost.classList.remove('active')
//     size.classList.remove('active')
//     filtersBrand.classList.remove('filter1-active');
//     filtersCost.classList.remove('filter3-active');
//     filtersSize.classList.remove('filter2-active');
//   })
// }

// function selectCostReadyButtonClick() {
//   selectCostReadyButton.addEventListener('click', () => {
//     selectCost.classList.remove('active')
//     filtersCost.classList.remove('filter3-active');
//   })
// }

// function redCrossClick() {
//   redCross.forEach((item, index) => { 
//     item.addEventListener('click', () => {
//       brand.classList.remove('active')
//       selectCost.classList.remove('active')
//       size.classList.remove('active')
//       filtersBrand.classList.remove('filter1-active');
//       filtersCost.classList.remove('filter3-active');
//       filtersSize.classList.remove('filter2-active');
//     });
//   });
// }

// function arrowClick() {
//   forwardArrow.addEventListener('click', () => {
//     backArrow.classList.toggle('active')
//     forwardArrow.classList.remove('active')
//     sneakersPageTwo.classList.toggle('active')
//     sneakersPageOne.classList.remove('active')
//   })

//   backArrow.addEventListener('click', () => {
//     forwardArrow.classList.toggle('active')
//     backArrow.classList.remove('active')
//     sneakersPageOne.classList.toggle('active')
//     sneakersPageTwo.classList.remove('active')
//   })
// }

// const sneakers = [
//   {
//     brand: 'Nike',
//     name: 'Nike Air Jordan 1 high Chicago',
//     sizes: [42, 43, 44],
//     cost: '18000 ₽',
//   },
// ]

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

function questionClick() {
  filter.forEach((item, index) => { 
    item.addEventListener('click', () => {
      filterCallbacks[index](item);
    });
  });
}

const questionCallbacks = [

]