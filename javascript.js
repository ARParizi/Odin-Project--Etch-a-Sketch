const gridContainer = document.querySelector('#grid-container');


const pixelArr = [];
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let newPixel = document.createElement('div'); 
        newPixel.addEventListener('mouseover', mouseOver);
        pixelArr.push(newPixel);
    }
}

for (let i =0; i < 16*16; i++) {
    gridContainer.appendChild(pixelArr[i]);
}

function mouseOver(e) {
    this.classList.add("mouse-over");
}