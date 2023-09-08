
const gridContainer = document.getElementById("grid-container");
//function for 16 x 16 board 
function gridBoard (rowNum, colNum) {
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

//function for hovering over cells

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function mouseStencil (color) {
    const grids = document.querySelectorAll(".cell");
    gridContainer.addEventListener("mouseover", (e) => {
        if(mouseDown) {
            const target = e.target;
            target.style.backgroundColor = color;
        }
    })
};

mouseStencil("black");