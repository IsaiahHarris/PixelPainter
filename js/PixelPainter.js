
function PixelPainter(width, height) {
  let pixelPaintDiv = document.getElementById("pixelPainter")
  let screen = document.createElement('div');
  let currentColor = '#FFFFFF';
  screen.className = 'scream';
  pixelPaintDiv.appendChild(screen);
  let isMouseDown = false;
  let colorsArr = [
    { name: 'red', colur: '#FF0000' },
    { name: 'green', colur: '#00FF00' },
    { name: 'blue', colur: '#0000FF' },
    { name: 'black', colur: '#000000' }
  ]

  function createCanvas(width, height) {
    for (let i = 0; i < height; i++) {
      let row = document.createElement('div');
      row.id = 'row';
      for (let j = 0; j < width; j++) {
        var c = document.createElement("div");
        row.appendChild(c);
        c.className = "cells";
        c.addEventListener('mousedown', function (event) {
          event.target.style.backgroundColor = currentColor;
          isMouseDown = true;
        })
            c.addEventListener('mouseover', function(event){
              if(isMouseDown === true){
              event.target.style.backgroundColor = currentColor;
              console.log(mouseDown);
              }
        })
       
      }
      pixelPaintDiv.appendChild(row);
    }
    

  }
  createCanvas(7,7);

  function paint() {
    c[x].style.backgroundColor = colorsArr[i].colur;
  }

  function createPallet(colorsArr) {
    for (let i = 0; i < colorsArr.length; i++) {
      let colorCell = document.createElement('div');
      colorCell.style.backgroundColor = colorsArr[i].colur;
      colorCell.className = 'colorcell';
      pixelPaintDiv.appendChild(colorCell);
      colorCell.addEventListener('click', function () {
        screen.innerHTML = colorsArr[i].name;
        currentColor = colorsArr[i].colur;
      })

    }
  }
  createPallet(colorsArr);
}

PixelPainter(8, 8);