
console.log('sanityCheck');

let pixelPaintDiv = document.getElementById("pixelPainter")


function createCanvas(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.id = 'row';
        for (let j = 0; j < gridSize; j++) {
            var c = document.createElement("div");
            row.appendChild(c);
            c.className = "cells";
        }
        pixelPaintDiv.appendChild(row);
    }
}
createCanvas(17);


function createPallet(colorGridSize) {
    for (let k = 0; k < colorGridSize; k++) {
        let colorRow = document.createElement('div');
        colorRow.class = 'crow'
          for (let l = 0; l < colorGridSize; l++) {
            var y = document.createElement('div');
            colorRow.appendChild(y);
            y.className = "colorCells";
        }
        pixelPaintDiv.appendChild(colorRow);
    }
}
createPallet(4);

let screen = document.createElement('div');
pixelPaintDiv.appendChild(screen);
screen.id = 'scream';

let pix = document.getElementsByClassName('cells');

for (let i = 0; i < pix.length; i++) {
    pix[i].addEventListener('click', function () {
        if (screen.innerHTML === 'red') {
            pix[i].style.backgroundColor = 'red';
        } else if (screen.innerHTML === 'orange') {
            pix[i].style.backgroundColor = 'orange';
        } else if (screen.innerHTML === 'yellow') {
            pix[i].style.backgroundColor = 'yellow';
        } else if (screen.innerHTML === 'green') {
            pix[i].style.backgroundColor = 'green';
        } else if (screen.innerHTML === 'blue') {
            pix[i].style.backgroundColor = 'blue';
        } else if (screen.innerHTML === 'tan') {ß
            pix[i].style.backgroundColor = 'tan';
        } else if (screen.innerHTML === 'pink') {
            pix[i].style.backgroundColor = 'Pink';
        } else if (screen.innerHTML === 'aquamarine') {
            pix[i].style.backgroundColor = 'aquamarine';
        } else if (screen.innerHTML === 'purple') {
            pix[i].style.backgroundColor = 'purple';
        } else if (screen.innerHTML === 'fuchsia') {
            pix[i].style.backgroundColor = 'fuchsia';
        } else if (screen.innerHTML === 'orange') {
            pix[i].style.backgroundColor = 'orange';
        } else if (screen.innerHTML === 'lime') {
            pix[i].style.backgroundColor = 'lime';
        } else if (screen.innerHTML === 'navy') {
            pix[i].style.backgroundColor = 'navy';
        } else if (screen.innerHTML === 'black') {
            pix[i].style.backgroundColor = 'black';
        } else if (screen.innerHTML === 'violet') {
            pix[i].style.backgroundColor = 'violet';
        } else if (screen.innerHTML === 'slateGrey') {
            pix[i].style.backgroundColor = 'slateGrey';
        } else if (screen.innerHTML === 'gold') {
            pix[i].style.backgroundColor = 'gold';
        }

    })
}


let col = document.getElementsByClassName('colorCells');
col[0].style.backgroundColor = 'red';
col[1].style.backgroundColor = 'orange';
col[2].style.backgroundColor = 'yellow';
col[3].style.backgroundColor = 'green';
col[4].style.backgroundColor = 'blue';
col[5].style.backgroundColor = 'tan';
col[6].style.backgroundColor = 'Pink';
col[7].style.backgroundColor = 'aquamarine';
col[8].style.backgroundColor = 'purple';
col[9].style.backgroundColor = 'black';
col[10].style.backgroundColor = 'lime';
col[11].style.backgroundColor = 'navy';
col[12].style.backgroundColor = '#FF00FF';
col[13].style.backgroundColor = 'violet';
col[14].style.backgroundColor = 'slateGrey';
col[15].style.backgroundColor = 'gold';



col[0].addEventListener('click', function () {
    screen.innerHTML = 'red';
})
col[1].addEventListener('click', function () {
    screen.innerHTML = 'orange'
})
col[2].addEventListener('click', function () {
    screen.innerHTML = 'yellow'
})
col[3].addEventListener('click', function () {
    screen.innerHTML = 'green'
})
col[4].addEventListener('click', function () {
    screen.innerHTML = 'blue'
})
col[5].addEventListener('click', function () {
    screen.innerHTML = 'tan'
})
col[6].addEventListener('click', function () {
    screen.innerHTML = 'pink'
})
col[7].addEventListener('click', function () {
    screen.innerHTML = 'aquamarine'
})
col[8].addEventListener('click', function () {
    screen.innerHTML = 'purple'
})
col[9].addEventListener('click', function () {
    screen.innerHTML = 'black'
})
col[10].addEventListener('click', function () {
    screen.innerHTML = 'lime'
})
col[11].addEventListener('click', function () {
    screen.innerHTML = 'navy'
})
col[12].addEventListener('click', function () {
    screen.innerHTML = 'fuchsia'
})
col[13].addEventListener('click', function () {
    screen.innerHTML = 'violet'
})
col[14].addEventListener('click', function () {
    screen.innerHTML = 'slateGrey'
})
col[15].addEventListener('click', function () {
    screen.innerHTML = 'gold'
})


