
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
        console.log(numberOfCell);
        resetGrid();
    } else {
        alert("You have chosen this already");
        resetGrid();
    }
}

//functions for the size buttons 


const smallGridBtn = document.getElementById("16");
smallGridBtn.addEventListener("click", function () {
    gridSize(16);
    mousePencil("black");
});

const midGridBtn = document.getElementById("32");
midGridBtn.addEventListener("click", function () {
    gridSize(32);
    mousePencil("black");
});

const larGridBtn = document.getElementById("64");
larGridBtn.addEventListener("click", function() {
    gridSize(64);
    //default value of black
    mousePencil("black");
})


//function for hovering over cells

function mousePencil (color) {
    console.log(grids)
    grids.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = color;
        });
    });
};

function randomMousePencil() {
    let letters = "123456789ABCDEF";
    let newColor = "#";
    for (let i=0; i < 6; i++) {
        newColor += letters[Math.floor(Math.random() *16)];
    }
    return newColor;
}

function rainbowMousePencil () {
    grids.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = randomMousePencil();
        })
    })
}

//function for color buttons
const blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", function () {
    resetGrid();
    mousePencil("black");
});

const mysteryBtn = document.getElementById("mystery");
mysteryBtn.addEventListener("click", () => {
    resetGrid();
    mousePencil(randomMousePencil());
})

const rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener("click", () => {
    resetGrid();
    rainbowMousePencil();
})




//function for reset
function resetGrid() {
    console.log(grids)
    grids.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGrid);

//default grid setting 
window.onload = () => {
    gridSize(16);
    mousePencil("black");
}