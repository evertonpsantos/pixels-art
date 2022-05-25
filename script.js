const blackColor = document.getElementById('black-color');
const redColor = document.getElementById('red-color');
const blueColor = document.getElementById('blue-color');
const greenColor = document.getElementById('green-color');

function selectColor(event) {
  const previousSelectedElement = document.querySelector('.selected');
  previousSelectedElement.style.borderColor = null;
  previousSelectedElement.classList.remove('selected');
  event.target.classList.add('selected');
  event.target.style.borderColor = 'gold';
}

blackColor.addEventListener('click', selectColor);
redColor.addEventListener('click', selectColor);
blueColor.addEventListener('click', selectColor);
greenColor.addEventListener('click', selectColor);

function colorPixel(event) {
   const selectedColor = document.querySelector('.selected');
   const cssObj = window.getComputedStyle(selectedColor);
   const bgColor = cssObj.getPropertyValue('background-color');
   event.target.style.backgroundColor = bgColor;
}

const pixelsBrancos = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelsBrancos.length; i += 1) {
   pixelsBrancos[i].addEventListener('click', colorPixel);
}

function clearBoard() {
   for (let i = 0; i < pixelsBrancos.length; i += 1) {
      pixelsBrancos[i].style.backgroundColor = 'white';
   }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);