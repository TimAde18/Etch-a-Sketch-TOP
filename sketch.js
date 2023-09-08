

//function for 16 x 16 board 
function gridBoard (rowNum, colNum) {
    const gridContainer = document.getElementById("grid-container");
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
}

document.addEventListener("DOMContentLoaded", function() {
    gridBoard(16, 16);
})