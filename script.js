const gridContainer = document.querySelector('#grid_container');
const knobPointer = document.querySelector('#knob_pointer');
const knobRange = document.querySelector('#knob_range');

// Buttons elements 

const clearButton = document.querySelector('#clear_grid_button');
const bordersButton = document.querySelector('#borders_toggle_button');
const colorButton = document.querySelector('#color_button');
const blackButton = document.querySelector('#black_color_button');
const eraserButton = document.querySelector('#eraser_button');
const rainbowButton = document.querySelector('#rainbow_button');
const slimShadyButton = document.querySelector('#shades_button');

// Boolean variables: 

let isBordersButtonActive = false;
let isEraserButtonActive = false;
let isColorButtonActive = false;
let isBlackButtonActive = true;
let isRainbowButtonActive = false;
let isSlimShadyActive = false;

// Buttons Event Listeners:

// SlimShady button:

slimShadyButton.addEventListener('click', () => {
    if (!isSlimShadyActive && colorButtonState !== '#e8dfcf') {
        isEraserButtonActive = false;
        isBlackButtonActive = false;
        isColorButtonActive = false;
        isSlimShadyActive = true;
        isRainbowButtonActive = false;
        slimShadyButton.style.backgroundColor = 'gray';
        slimShadyButton.style.color = '#e8dfcf';
        fillSquares(colorButtonState);
    }
    else if (!isSlimShadyActive && colorButtonState === '#e8dfcf') {
        alert(`Can't combine the eraser with gray scaling. Try with: black, rainbow or color button.`);
    }
    else if (isSlimShadyActive) {
        colorButtonState = 'black';
        fillSquares(colorButtonState);
        colorButton.removeAttribute('style');
        rainbowButton.removeAttribute('style');
        eraserButton.removeAttribute('style');
        slimShadyButton.removeAttribute('style');
        isBlackButtonActive = true;   
        isSlimShadyActive = false;
        blackButton.style.color = '#e8dfcf';
        blackButton.style.backgroundColor = 'black'
    }
})

// Rainbow Button:

rainbowButton.addEventListener('click', () => {
    if (!isRainbowButtonActive) {
        colorButtonState = 'rainbow'
        colorButton.removeAttribute('style');
        blackButton.removeAttribute('style');
        eraserButton.removeAttribute('style');
        slimShadyButton.removeAttribute('style');
        isEraserButtonActive = false;
        isBlackButtonActive = false;
        isColorButtonActive = false;
        isSlimShadyActive = false;
        isRainbowButtonActive = true;
        const gridSquares = document.querySelectorAll('.square');
        gridSquares.forEach(square => {
            square.classList.add('ready_for_the_slim_shady');
        })
        rainbowButton.style.backgroundImage = 'linear-gradient(90deg, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #bdb2ff, #ffc6ff)';
        return colorButtonState; 
    }
    else if (isRainbowButtonActive) {
        colorButtonState = 'black';
        fillSquares(colorButtonState);
        colorButton.removeAttribute('style');
        rainbowButton.removeAttribute('style');
        eraserButton.removeAttribute('style');
        isBlackButtonActive = true;   
        isRainbowButtonActive = false;
        blackButton.style.color = '#e8dfcf';
        blackButton.style.backgroundColor = 'black'
    }
})

// Eraser Button:



eraserButton.addEventListener('click', () => {
    if (!isEraserButtonActive) {
        colorButtonState = '#e8dfcf'
        fillSquares(colorButtonState);
        eraserButton.style.boxShadow = 'inset 1px 1px 1px black, inset -1px -1px 1px black'
        colorButton.removeAttribute('style');
        blackButton.removeAttribute('style');
        rainbowButton.removeAttribute('style');
        slimShadyButton.removeAttribute('style');
        isEraserButtonActive = true;
        isBlackButtonActive = false;
        isColorButtonActive = false;
        isRainbowButtonActive = false;
        isSlimShadyActive = false;
    }
    else if (isEraserButtonActive) {
        colorButtonState = 'black';
        eraserButton.removeAttribute('style');
        blackButton.style.color 
        fillSquares(colorButtonState);
        blackButton.style.color = '#e8dfcf';
        blackButton.style.backgroundColor = 'black';
        isBlackButtonActive = true;
        isEraserButtonActive = false;
    }
})

// Black Button:

blackButton.style.backgroundColor = 'black';
blackButton.style.color = '#e8dfcf';

blackButton.addEventListener('click', () => {
    if(!isBlackButtonActive) {
        colorButtonState = 'black';
        fillSquares(colorButtonState);
        colorButton.removeAttribute('style');
        eraserButton.removeAttribute('style');
        rainbowButton.removeAttribute('style');
        slimShadyButton.removeAttribute('style');
        isEraserButtonActive = false;
        isColorButtonActive = false;
        isRainbowButtonActive = false;
        isSlimShadyActive = false;
        isBlackButtonActive = true;
        blackButton.style.color = '#e8dfcf';
        blackButton.style.backgroundColor = 'black';
        const gridSquares = document.querySelectorAll('.square');
        gridSquares.forEach(square => {
            square.classList.add('ready_for_the_slim_shady');
        })
    }
    else if (isBlackButtonActive) {
        colorButtonState = '#e8dfcf'
        fillSquares(colorButtonState);
        eraserButton.style.boxShadow = 'inset 1px 1px 1px black, inset -1px -1px 1px black'
        colorButton.removeAttribute('style');
        blackButton.removeAttribute('style');
        isEraserButtonActive = true;
        isBlackButtonActive = false;
    }    
});

// Colors Button:

let colorButtonState = 'black';


colorButton.addEventListener('click', () => {
    if(!isColorButtonActive) {
        colorButtonState = 'red';
        fillSquares(colorButtonState);
        colorButton.style.backgroundColor = 'red';
        colorButton.style.color = '#e8dfcf';
        colorButton.style.fontWeight = 'bold';
        blackButton.removeAttribute('style');
        eraserButton.removeAttribute('style');
        rainbowButton.removeAttribute('style');
        slimShadyButton.removeAttribute('style');
        isEraserButtonActive = false;
        isBlackButtonActive = false;
        isRainbowButtonActive = false;
        isSlimShadyActive = false;
        isColorButtonActive = true;
        const gridSquares = document.querySelectorAll('.square');
        gridSquares.forEach(square => {
            square.classList.add('ready_for_the_slim_shady');
        })
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
        isColorButtonActive = false;
    }
    
})


// Clear Button:

clearButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    const knobRangeValue = parseInt(knobRange.value);
    setGridResolution(knobRangeValue);
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(square => {
        square.classList.add('ready_for_the_slim_shady');
    })
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
            divSquare.classList.add('ready_for_the_slim_shady');
            divSquare.style.opacity = '1';
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
    divSquare.forEach(originalSquare => {
        // Cloning the nodes to avoid event listeners from duplicating. Fixes gray scaling bug.
        const square = originalSquare.cloneNode(true);
        originalSquare.parentNode.replaceChild(square, originalSquare); 

        square.addEventListener('pointerdown', () => {
            if (isSlimShadyActive) {
                if(isRainbowButtonActive) {
                    square.style.backgroundColor = fillSquaresWithRainbow();
                    square.style.opacity = fillSquaresWithSlimShady(square)
                }
                else {
                    square.style.backgroundColor = color; 
                    square.style.opacity = fillSquaresWithSlimShady(square)
                }
            }
            else if (isRainbowButtonActive) {
                square.removeAttribute('style');
                square.style.backgroundColor = fillSquaresWithRainbow();
            }
            else {
                square.removeAttribute('style');
                square.style.backgroundColor = color;
            }
        })
        square.addEventListener('pointerenter', () => {
            if(isDown) {
                if (isSlimShadyActive) {
                    if(rainbowButton.hasAttribute('style')) {
                        square.style.backgroundColor = fillSquaresWithRainbow();
                        square.style.opacity = fillSquaresWithSlimShady(square)
                    }
                    else {
                        square.style.backgroundColor = color; 
                        square.style.opacity = fillSquaresWithSlimShady(square)
                    }
                }
                else if (isRainbowButtonActive) {
                    square.removeAttribute('style');    
                    square.style.backgroundColor = fillSquaresWithRainbow();
                }
                else {
                    square.removeAttribute('style');
                    square.style.backgroundColor = color;
                }
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

 // Define gray scaling logic, slimShady EQUALS greyScaling:

 function fillSquaresWithSlimShady(square) {
    if (square.classList.contains('ready_for_the_slim_shady')) {
        square.classList.remove('ready_for_the_slim_shady');
        square.style.opacity = '0.1';
        return;
    }
    else if (square.style.opacity === '0.1') {
        square.style.opacity = '0.2'
        return;
    }
    else if (square.style.opacity === '0.2') {
        square.style.opacity = '0.3'
        return;
    }
    else if (square.style.opacity === '0.3') {
        square.style.opacity =  '0.4';
    }
    else if (square.style.opacity === '0.4') {
        square.style.opacity = '0.5'
        return;
    }
    else if (square.style.opacity === '0.5') {
        square.style.opacity = '0.6'
        return;
    }
    else if (square.style.opacity === '0.6') {
        square.style.opacity =  '0.7';  
        return;  
    }
    else if (square.style.opacity === '0.7') {
        square.style.opacity = '0.8'
        return;
    }
    else if (square.style.opacity === '0.8') {
        square.style.opacity = '0.9'
        return;
    }
    else if (square.style.opacity === '0.9') {
        square.style.opacity = '1';
        return;
    }
 }

 // Define rainbow drawing logic:

 function fillSquaresWithRainbow() {
    let color;

    let randomNumber = Math.floor(Math.random() * (8) + 1);
    if (randomNumber === 1) {
        color = '#ffadad';
    }
    else if (randomNumber === 2) {
        color = '#ffd6a5';
    }
    else if (randomNumber === 3) {
        color = '#fdffb6';
    }
    else if (randomNumber === 4) {
        color = '#caffbf';
    }
    else if (randomNumber === 5) {
        color = '#9bf6ff';
    }
    else if (randomNumber === 6) {
        color = '#a0c4ff';
    }
    else if (randomNumber === 7) {
        color = '#bdb2ff';
    }
    else if (randomNumber === 8) {
        color = '#ffc6ff';
    }   
    return color;
 }