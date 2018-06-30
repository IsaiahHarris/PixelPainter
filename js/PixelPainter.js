
console.log('sanityCheck');

let pixelPaintDiv = document.getElementById("pixelPainter")


let gridSize = 12;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            var c=document.createElement("div");
            pixelPaintDiv.appendChild(c);
            c.className="cels";
            c.innerHTML = 'hi';
        }
        pixelPaintDiv.innerHTML += '\n';
    }

    let pix = document.getElementsByClassName('cels')

    for (let i = 0; i < pix.length; i++) {
        pix[i].addEventListener('click', function(){
            pix[i].style.color = 'green';
        })

    }
    