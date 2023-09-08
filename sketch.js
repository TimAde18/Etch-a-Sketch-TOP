
const gridContainer = document.getElementById("grid-container");
//function for grid board 
function gridBoard (rowNum, colNum) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`;
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
//gridBoard(16, 16);

//function for size button
let numberOfCell = 0;
let grids = document.querySelectorAll(".cell");

function gridSize (num) {
    if (numberOfCell != num) {
        gridBoard(num, num);
        grids = document.querySelectorAll(".cell");
        console.log(grids)
        numberOfCell = num;
    } else {
        alert("You have chosen this already");
    }
    resetGrid();
}
console.log(numberOfCell);


const smallGridBtn = document.getElementById("16");
smallGridBtn.addEventListener("click", function () {
    gridSize(16);
});

const midGridBtn = document.getElementById("32");
midGridBtn.addEventListener("click", function () {
    gridSize(32);
});

//function for hovering over cells

function mousePencil (color) {
    console.log(grids)
    grids.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = color;
        });
    })
};

//function for color buttons
const blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", function () {
    mousePencil("black");
});


//function for reset
function resetGrid() {
    console.log(grids)
    grids.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGrid);