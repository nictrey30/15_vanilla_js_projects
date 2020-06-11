const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', () => {
  // console.log(document.body);
  // get random number between 0 and 3
  let randomNumber = getRandomNumber();
  while (color.textContent === colors[randomNumber]) {
    randomNumber = getRandomNumber();
    // console.log(`in while loop ${randomNumber}`);
  }
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => Math.floor(Math.random() * 4);
