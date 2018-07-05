
function PixelPainter(width, height) {
  let pixelPaintDiv = document.getElementById("pixelPainter")
  let screen = document.createElement('div');
  let currentColor = '#FFFFFF';
  screen.className = 'scream';
  pixelPaintDiv.appendChild(screen);
  let isMouseDown = false;
  let isRandom = false;
  let rdCol = 'rgb(' + random(253) + ',' + random(253) + ',' + random(253) + ')';
  let colorsArr = [
    { name: 'red', colur: '#FF0000' },
    { name: 'green', colur: '#00FF00' },
    { name: 'blue', colur: '#0000FF' },
    { name: 'black', colur: '#000000' },
    { name: 'silver', colur: '#C0C0C0' },
    { name: 'maroon', colur: '#800000' },
    { name: 'yellow', colur: '#FFFF00' },
    { name: 'olive', colur: '#808000' },
    { name: 'lime', colur: '#00FF00' },
    { name: 'aqua', colur: '#00FFFF' },
    { name: 'teal', colur: '#008080' },
    { name: 'navy', colur: '#000080' },
    { name: 'fuchsia', colur: '#FF00FF' },
    { name: 'purple', colur: '#800080' },
    { name: 'royalBlue', colur: '#4169E1' },
    { name: 'turquoise', colur: '#40E0D0' },
    { name: 'gold', colur: '#FFD700' },
    { name: 'chocolate', colur: '#D2691E' },
    { name: 'smokeWhite', colur: '#DFDFDF' }
  ]
  var c;
  function createCanvas(width, height) {
    for (let i = 0; i < height; i++) {
      let row = document.createElement('div');
      row.id = 'row';
      for (let j = 0; j < width; j++) {
        c = document.createElement("div");
        row.appendChild(c);
        c.className = "cells";
        c.addEventListener('mousedown', function (event) {
          event.target.style.backgroundColor = currentColor;
          isMouseDown = true;
        })
        c.addEventListener('mouseover', function (event) {
          if (isMouseDown === true) {
            event.target.style.backgroundColor = currentColor;
            console.log(mouseDown);
          }
        })
        c.addEventListener('mouseup', function () {
          isMouseDown = false;
        })
        document.body.addEventListener('mouseup', function(){
          isMouseDown = false;
        })
      }
      pixelPaintDiv.appendChild(row);
    }


  }
  createCanvas(15, 15);

let colorDiv = document.createElement('div');
colorDiv.className = 'color-container';
document.body.appendChild(colorDiv);
  function createPallet(colorsArr) {
    for (let i = 0; i < colorsArr.length; i++) {
      let colorCell = document.createElement('div');
      colorCell.style.backgroundColor = colorsArr[i].colur;
      colorCell.className = 'colorcell';
      colorDiv.appendChild(colorCell);
      colorCell.addEventListener('click', function () {
        screen.innerHTML = colorsArr[i].name;
        currentColor = colorsArr[i].colur;
      })
    }
  }
  createPallet(colorsArr);

  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonContainer';
  pixelPaintDiv.appendChild(buttonContainer);
  let clearButton = document.createElement('button')
  clearButton.class= 'clearButton';
  clearButton.innerHTML = 'clear';
  let eraseButton = document.createElement('button')
  eraseButton.class = 'eraseButton';
  eraseButton.innerHTML = 'erase';
  let randomColorButton = document.createElement('button');
  randomColorButton.class = 'randomColor';
  randomColorButton.innerHTML = 'randomColor'
  buttonContainer.appendChild(clearButton);
  buttonContainer.appendChild(eraseButton);
  buttonContainer.appendChild(randomColorButton);

  randomColorButton.addEventListener('click', function(){
    isRandom = true;
    screen.innerHTML = 'random'
    currentColor = 'rgb(' + random(360) + ',' + random(360) + ',' + random(360) + ')'
  })
  clearButton.addEventListener('click', clearFunc);
  eraseButton.addEventListener('click', eraseFunc);

  function clearFunc() {
    c = document.getElementsByClassName('cells')
    for (let i = 0; i < c.length; i++) {
      c[i].style.backgroundColor = 'white';
    }
  }
  function eraseFunc(){
    screen.innerHTML = 'eraser';
        currentColor = 'white';
  }
  function random(number) {
    return Math.floor(Math.random()*(number+1));
  }

}

PixelPainter(8, 8);