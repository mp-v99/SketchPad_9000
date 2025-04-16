const gridContainer = document.querySelector('#grid_container');
const knobPointer = document.querySelector('#knob_pointer');
const knobRange = document.querySelector('#knob_range');






function setGridResolution(squareSize) {
    addRows(squareSize);
    addColumns(squareSize);
    fillSquares('black');
};

// Draw grid logic:

function addRows(squareSize) {  
    for (let i = 0; i < squareSize; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');   
        gridContainer.appendChild(divRow);
        let roundCorner = i + 1;
        addRowRoundCorners(roundCorner, divRow, squareSize);
    }
};


function addColumns(squareSize) {
    const divRow = document.querySelectorAll('.row');
    divRow.forEach(row => {
        for (let i = 0; i < squareSize; i++){
            const divSquare = document.createElement('div');
            divSquare.classList.add(`square`);
            row.appendChild(divSquare);  
            let roundCorner = i + 1;
            addSquareRoundCorners(roundCorner, divSquare, squareSize);
        }
    })
};

function addRowRoundCorners(roundCorner, item, squareSize) {
    if (roundCorner === 1) {
        item.classList.add(`row_0`);
    }
    else if (roundCorner === squareSize) {
        item.classList.add(`row_15`);
    }
    else {
        return;
    }
}

function addSquareRoundCorners(roundCorner, item, squareSize) {
    if (roundCorner === 1) {
        item.classList.add(`square_0`); 
    }
    else if (roundCorner === squareSize) {
        item.classList.add(`square_15`);
    }
    else {
        return;
    }
}


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

// Define input dragging logic



knobRange.addEventListener('input', () => {
    gridContainer.innerHTML = '';
    const value = parseInt(knobRange.value);
    setGridResolution(value);
    dragKnob();
});

let knobRangeEvent = new Event('input', [knobRange.value = 16]);

knobRange.dispatchEvent(knobRangeEvent);


// Define knobPointer position according to input position

function dragKnob() {
    const min = parseInt(knobRange.min);
    const max = parseInt(knobRange.max);
    const value = parseInt(knobRange.value);

    const percent = (value - min) / (max - min);

    const angle = Math.PI - (Math.PI * percent);

    const radius = 25;

    const centerX = 32;
    const centerY = 32;

    const x = centerX + Math.cos(angle) * radius;
    const y = centerY - Math.sin(angle) * radius;

    knobPointer.style.left =  `${x}px`;
    knobPointer.style.top = `${y}px`
    
 }