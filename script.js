const gridContainer = document.querySelector('#grid_container');

setGridSize(3)

function setGridSize(squareSize) {
    addRows(squareSize);
    addColumns(squareSize);
}

function addRows(squareSize) {  
    for (let i = 0; i < squareSize; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.classList.add(i);
        gridContainer.appendChild(divRow);
    }
}

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
}
