import "./style.css";
import "./gameConfig";
import { COLS, ROWS } from "./gameConfig";

console.log("hi");
console.log(ROWS);
console.log(COLS);

type Coordinate = [number, number];

const divEl = document.getElementById("grid-container") as HTMLDivElement;

function coordToId([x, y]: Coordinate): `${number}-${number}` {
  return `${x}-${y}`;
}

//create a function to create board
function createBoard(
  numRows: number,
  numCols: number,
  container: HTMLDivElement
) {
  // add display grid, cols and rows to the container
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  //add class with height to the actual container

  //add a div for each single row and column (hint loop)
  for (let i = 0; i < numCols * numRows; i++) {
    //create gridcell
    const gridSquare = document.createElement("div");
    //add the class of "grid-square" to each div
    gridSquare.classList.add("grid-square");

    //add a unique id to each single div Element (hint firstElement: "0-0" secondChild: "0-1")
    gridSquare.id = coordToId([Math.floor(i / numCols), i % numRows]);

    //append the divs to the container
    container.appendChild(gridSquare);
  }
}
createBoard(ROWS, COLS, divEl);

function gameLoop(currentTime: number) {
  console.log(currentTime);
}
window.requestAnimationFrame(gameLoop);

function gameLoop1() {
  window.requestAnimationFrame(gameLoop);
} //it is called recursivness in the function we call the function
window.requestAnimationFrame(gameLoop1);

//simple recursion function
let time = 0;
function foo() {
  console.log(time);
  if (time === 10) {
    return;
  }
  time++;
  foo();
}

foo();

//in the init()
function gameLoop2() {
  setTimeout(() => {
    console.log("running");
    window.requestAnimationFrame(gameLoop2);
  }, 1000);
} //it is called recursivness in the function we call the function
window.requestAnimationFrame(gameLoop2);
