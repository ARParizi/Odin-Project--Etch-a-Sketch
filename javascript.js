const gridContainer = document.querySelector('#grid-container');


const pixelArr = [];
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        pixelArr.push(document.createElement('div'));
    }
}

for (let i =0; i < 16*16; i++)
{
    gridContainer.appendChild(pixelArr[i]);
}

