const burger = document.getElementById("burger"),
      navigation = document.querySelector(".navigation"),
      overlay = document.querySelector('.overlay'),
      filter = document.querySelectorAll('.filters-list__item')
      filterText = document.querySelectorAll(".filters-list__item-text"),
      questions = document.querySelectorAll('.question')
      feedbackButton = document.querySelector('.feedback-button')
      feedbackForm = document.querySelector('.feedback__form')
      redCross = document.querySelector('.red-cross')

document.addEventListener("DOMContentLoaded", burgerClick)
document.addEventListener("DOMContentLoaded", questionClick)
document.addEventListener("DOMContentLoaded", feedbackButtonClick)
document.addEventListener("DOMContentLoaded", redCrossClick)

function burgerClick() {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('open'); 
    document.querySelector("header").classList.toggle('open');
    overlay.classList.toggle('open');
  });
}

function questionClick() {
    questions.forEach((item, index) => { 
      item.addEventListener('click', () => {
        questionCallbacks[index](item);
     });
  });
}

function feedbackButtonClick() {
    feedbackButton.addEventListener('click', () => {
        feedbackForm.classList.toggle('active')
        feedbackButton.classList.toggle('disactive')
        overlay.classList.toggle('active')
        document.querySelector('body').classList.toggle("open");
    })
}

function redCrossClick() {
    redCross.addEventListener('click', () => {
        feedbackForm.classList.remove('active')
        feedbackButton.classList.remove('disactive')
        overlay.classList.remove('active');
        document.querySelector('body').classList.remove("open");
    })
}

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  window.location.reload();

})

const questionCallbacks = [
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
    (item) => {
        item.classList.toggle('active'); 
    },
]