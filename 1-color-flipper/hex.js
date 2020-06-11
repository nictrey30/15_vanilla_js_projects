const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let randColor = getRandomColor();
  document.body.style.backgroundColor = randColor;
  color.textContent = randColor;
});

const getRandomColor = () => {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '';
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * hexArray.length);
    color += String(hexArray[randomNum]);
  }
  let sameHex = 0;
  for (let i = 0; i < 5; i = i + 2) {
    if (color.charAt(i) === color.charAt(i + 1)) {
      sameHex++;
    }
  }
  if (sameHex === 3) {
    let newColor = '#';
    for (let i = 0; i < 5; i = i + 2) {
      newColor += color[i];
    }
    return newColor;
  }
  color = '#' + color;
  return color;
};
