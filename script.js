const gridContainer = document.querySelector('#grid_container');

setGrid(24, 'red');

function setGrid(squareSize, color) {
    addRows(squareSize);
    addColumns(squareSize);
    fillSquares(color);
};

// Draw grid logic:

function addRows(squareSize) {  
    for (let i = 0; i < squareSize; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.classList.add(i);
        gridContainer.appendChild(divRow);
    }
};

function addColumns(squareSize) {
    const divRow = document.querySelectorAll('.row');
    divRow.forEach(row => {
        for (let i = 0; i < squareSize; i++){
            const divSquare = document.createElement('div');
            divSquare.classList.add(`square`);
            divSquare.classList.add(i);
            row.appendChild(divSquare);  
        }
    })
};

// Click and drag logic to fill the squares:

let isDown = false;

window.addEventListener('mousedown', () => {
    isDown = true;
})

window.addEventListener('mouseup', () => {
    isDown = false;
})

function fillSquares(color) {
    const divSquare = document.querySelectorAll('.square'); 
    divSquare.forEach(square => {
        square.addEventListener('pointerdown', () => {
            square.style.backgroundColor = color;
        })
        square.addEventListener('pointermove', () => {
            if(isDown) {
                square.style.backgroundColor = color; 
            }
        });
    });
};