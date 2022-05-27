const blackColor = document.getElementById('black-color');
const redColor = document.getElementById('red-color');
const blueColor = document.getElementById('blue-color');
const greenColor = document.getElementById('green-color');
const buttonGenerateBoard = document.getElementById('generate-board');

function colorPixel(event) {
  const parameter = event;
  const selectedColor = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedColor);
  const bgColor = cssObj.getPropertyValue('background-color');
  parameter.target.style.backgroundColor = bgColor;
}

function createBoardSection() {
  const body = document.querySelector('body');
  const boardSection = document.createElement('div');
  boardSection.id = 'pixel-board';
  body.appendChild(boardSection);
}

createBoardSection();

function createBoard(n) {
  const pixelBoardSection = document.querySelector('pixel-board');
  for (let i = 0; i < n; i += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let index = 0; index < n; index += 1) {
      const newCell = document.createElement('div');
      newCell.classList.add('pixel');
      newRow.appendChild(newCell);
      newCell.addEventListener('click', colorPixel);
    }
    pixelBoardSection.appendChild(newRow);
  }
}

createBoard(5);

buttonGenerateBoard.addEventListener('click', () => {
  let input = document.getElementById('board-size').value;
  if (input === '') {
    alert('Board inválido!');
  }
  if (input < 5) {
    input = 5;
  }
  if (input > 50) {
    input = 50;
  }
  const pixelBoardSection = document.getElementById('pixel-board');
  pixelBoardSection.remove();
  createBoardSection();
  createBoard(input);
});

function selectColor(event) {
  const parameter = event;
  const previousSelectedElement = document.querySelector('.selected');
  previousSelectedElement.style.borderColor = null;
  previousSelectedElement.classList.remove('selected');
  event.target.classList.add('selected');
  parameter.target.style.borderColor = 'gold';
}

blackColor.addEventListener('click', selectColor);
redColor.addEventListener('click', selectColor);
blueColor.addEventListener('click', selectColor);
greenColor.addEventListener('click', selectColor);

function clearBoard() {
  const pixelsBrancos = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsBrancos.length; i += 1) {
    pixelsBrancos[i].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

function generateRandomColor() {
  const secondColor = document.getElementById('red-color');
  const thirdColor = document.getElementById('blue-color');
  const fourthColor = document.getElementById('green-color');
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  secondColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  thirdColor.style.backgroundColor = `rgb(${green}, ${blue}, ${red})`;
  fourthColor.style.backgroundColor = `rgb(${blue}, ${red}, ${red})`;
}

window.onload = () => {
  generateRandomColor();
};

