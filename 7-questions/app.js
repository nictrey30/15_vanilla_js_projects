// 1. traversing the dom
const btns = document.querySelectorAll('.question-btn');
//  add event listeners to every button
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});

// 2. using selectors inside the element

// target is the element that triggered the event (e.g., the user clicked on)
// currentTarget is the element that the event listener is attached to.
