// set initial count
let count = 0;

const buttons = document.querySelector('.button-container');
const counter = document.querySelector('#value');

buttons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    if (button.classList.contains('increase')) {
      count++;
    } else if (button.classList.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }
  }
  counter.style.color = count === 0 ? 'black' : count < 0 ? 'red' : 'green';
  counter.textContent = count;
});
