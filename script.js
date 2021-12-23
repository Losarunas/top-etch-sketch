let gridSize = 32;

let grid = document.querySelector('.grid');
let clearGridBtn = document.querySelector('#clear-grid');

clearGridBtn.addEventListener('click', () => changeGrid())

function changeGrid() {
    gridSize = prompt("Size of your grid");
    if (gridSize >= 100 || isNaN(gridSize) || gridSize < 1) {
        alert("Please insert number between 1 and 100")
        changeGrid()
    }
    clearGrid();
    generateGrid();
}

function clearGrid() {
    grid.innerHTML = ''
}

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let y = 0; y < gridSize; y++) {
            let div = document.createElement("div");
            div.className = "grid-element";
            div.style.flex = `1 0 ${100 / gridSize - 0.3}%`
            div.style.height = 100 / gridSize - 0.3;
            div.style.border = "1px solid black"
            grid.appendChild(div);
        }
    }
    let gridElements = document.querySelectorAll(".grid-element");
    for (let gridItem of gridElements) {
        gridItem.addEventListener("mouseover", () => gridItem.style.backgroundColor = 'green');
    }
}

generateGrid();

