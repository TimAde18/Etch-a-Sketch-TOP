
const gridContainer = document.getElementById("grid-container");
//function for 16 x 16 board 
function gridBoard (rowNum, colNum) {
    gridContainer.style.gridTemplateColumns = `repeat(${rowNum}), 1fr`;
    for(let i=0; i< rowNum; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        gridContainer.appendChild(gridRow);
        for (let j=0; j<colNum; j++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("cell");
            gridRow.appendChild(gridCell);
        }
    }
};

gridBoard(16, 16);

//functions for the size buttons 
const smallGrid = document.getElementById("16");

//function for hovering over cells

const cells = document.querySelectorAll(".cell");

function mouseStencil (color) {
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = color;
        })
    })
};

mouseStencil("black");

//function reset board
function resetGrid() {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    })
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGrid);