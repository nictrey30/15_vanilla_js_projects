// 1. traversing the dom
// target is the element that triggered the event (e.g., the user clicked on)
// currentTarget is the element that the event listener is attached to.
/*
const btns = document.querySelectorAll('.question-btn');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});
*/

// 2. using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);
  btn.addEventListener('click', () => {
    // if i click on one question close the others
    questions.forEach((item) => {
      // close all questions that don't match the item
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
