const gridContainer = document.querySelector('#grid_container');
const knobPointer = document.querySelector('#knob_pointer');
const knobRange = document.querySelector('#knob_range');

// Buttons elements 

const clearButton = document.querySelector('#clear_grid_button');
const bordersButton = document.querySelector('#borders_toggle_button');
const colorButton = document.querySelector('#color_button');
const blackButton = document.querySelector('#black_color_button');
const eraserButton = document.querySelector('#eraser_button');

// Boolean variables: 

let isBordersButtonActive = false;
let isEraserButtonActive = false;

// Buttons Event Listeners:

// Eraser Button:



eraserButton.addEventListener('click', () => {
    if (!isEraserButtonActive) {
        colorButtonState = '#e8dfcf'
        fillSquares(colorButtonState);
        eraserButton.style.boxShadow = 'inset 1px 1px 1px black, inset -1px -1px 1px black'
        colorButton.removeAttribute('style');
        blackButton.removeAttribute('style');
        isEraserButtonActive = true;
    }
    else if (isEraserButtonActive) {
        colorButtonState = 'black';
        isEraserButtonActive = false;
        eraserButton.removeAttribute('style');
        blackButton.style.color 
        fillSquares(colorButtonState);
        blackButton.style.color = '#e8dfcf';
        blackButton.style.backgroundColor = 'black';
    }
})

// Black Button:

blackButton.style.backgroundColor = 'black';
blackButton.style.color = '#e8dfcf';

blackButton.addEventListener('click', () => {
    if(colorButtonState !== 'black') {
        colorButtonState = 'black';
        fillSquares(colorButtonState);
        blackButton.style.color = '#e8dfcf';
        blackButton.style.backgroundColor = 'black';
        colorButton.removeAttribute('style');
        eraserButton.removeAttribute('style');
        isEraserButtonActive = false;
    }
});

// Colors Button:

let colorButtonState = 'black';


colorButton.addEventListener('click', () => {
    if(colorButtonState === 'black' || 
       colorButtonState === '#e8dfcf') {
        colorButtonState = 'red';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'red';
        colorButton.style.color = '#e8dfcf';
        colorButton.style.fontWeight = 'bold';
        blackButton.removeAttribute('style');
        eraserButton.removeAttribute('style');
        isEraserButtonActive = false;
    }
    else if (colorButtonState === 'red') {
        colorButtonState = 'orange';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'orange';
    }
    else if (colorButtonState === 'orange') {
        colorButtonState = 'yellow';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'yellow';
    }
    else if (colorButtonState == 'yellow') {
        colorButtonState = 'green';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'green';
    }
    else if (colorButtonState === 'green') {
        colorButtonState = 'blue';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'blue';
    }
    else if (colorButtonState === 'blue') {
        colorButtonState = 'indigo';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'indigo';
    }
    else if (colorButtonState === 'indigo') {
        colorButtonState = 'violet';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'violet';
    }
    else if (colorButtonState === 'violet') {
        colorButtonState = 'black';
        fillSquares(colorButtonState);
        colorButton.removeAttribute('style');
        blackButton.style.backgroundColor = 'black';
        blackButton.style.color = '#e8dfcf';
    }
    
})


// Clear Button:

clearButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    const knobRangeValue = parseInt(knobRange.value);
    setGridResolution(knobRangeValue);
})


function setGridResolution(squareSize) {
    addRows(squareSize);
    addColumns(squareSize, isBordersButtonActive);
    fillSquares(colorButtonState);
};

// Borders Button:

bordersButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(square => {

    // Keeping the following conditions separate prevents unexpected behavior

        if (!isBordersButtonActive) {
            square.classList.add(`no_borders_square`);
        }
        else if (isBordersButtonActive) {
            square.classList.remove(`no_borders_square`);
    
        }
    })
        if (!isBordersButtonActive) {
            isBordersButtonActive = true;
            bordersButton.classList.remove(`borders_button_active`);
        }
        else if (isBordersButtonActive) {
            isBordersButtonActive = false;
            bordersButton.classList.add(`borders_button_active`);
        }

})


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


function addColumns(squareSize, isBordersButtonActive) {
    const divRow = document.querySelectorAll('.row');
    divRow.forEach(row => {
        for (let i = 0; i < squareSize; i++){
            const divSquare = document.createElement('div');
            divSquare.classList.add(`square`);
            row.appendChild(divSquare);  
            let roundCorner = i + 1;
            addSquareRoundCorners(roundCorner, divSquare, squareSize);
            if (isBordersButtonActive) {
                divSquare.classList.add(`no_borders_square`);
            }
            else if (!isBordersButtonActive) {
                divSquare.classList.remove(`no_borders_square`);
            }
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
    const knobRangeValue = parseInt(knobRange.value);
    setGridResolution(knobRangeValue);
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