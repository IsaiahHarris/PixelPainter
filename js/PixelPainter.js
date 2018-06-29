console.log('sanityCheck');

let pixelPaintDiv = document.getElementById("pixelPainter")
let gridSize = 12;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            pixelPaintDiv.innerHTML += '<div class = "cels"> </div>';
        }
        pixelPaintDiv.innerHTML += '\n';
    }

    let cel = document.getElementById('cels');
    function changeCellColor(){
        console.log('hi');
    }
    cel.addEventListener('click', changeCellColor);