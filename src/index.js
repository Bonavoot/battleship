import "./style.css";
import players from "./players";
import ship from "./ship";
import gameBoard from "./gameboard";
import renderBoard from "./renderBoard";
import renderShips from "./renderShips";

// Selectors
const humanBoard = document.getElementsByClassName("player-one-board");
const computerBoard = document.getElementsByClassName("player-two-board");
const playerOneCells = document.querySelectorAll(".player-one-cell");
const computerCells = document.querySelectorAll(".computer-cell");

const newGameBoard = gameBoard();
const computer = players();
const human = players();

// Game loop
const playGame = (() => {
  let newGameBoard = gameBoard();
  renderBoard(newGameBoard.gameBoardArray);
  renderShips(human);
})();

// const draggableShips = document.querySelectorAll(".drag-ship");

// draggableShips.forEach((draggable) => {
// draggable.addEventListener("dragstart", () => {
//   draggable.classList.add("dragging");
// });

// draggable.addEventListener("dragend", () => {
//   draggable.classList.remove("dragging");
//   newGameBoard.placeShip(.id, 5);
// });

// playerOneCells.forEach((cell) => {
//   playerOneCells.addEventListener("dragover", () => {
//     const draggable = document.querySelector(".dragging");

//   });
// });
// });

newGameBoard.randomlyPlaceShips(computer, newGameBoard);
console.log(newGameBoard.gameBoardArray);
