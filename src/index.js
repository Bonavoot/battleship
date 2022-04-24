import "./style.css";
import players from "./players";
import ship from "./ship";
import gameBoard from "./gameboard";
import renderBoard from "./renderBoard";

// Selectors
const humanBoard = document.getElementsByClassName("player-one-board");
const computerBoard = document.getElementsByClassName("player-two-board");
const playerOneCells = document.querySelectorAll(".player-one-cell");
const computerCells = document.querySelectorAll(".computer-cell");

// Game loop
const playGame = (() => {
  let newGameBoard = gameBoard();
  renderBoard(newGameBoard.gameBoardArray);
})();

const newGameBoard = gameBoard();
const computer = players();

newGameBoard.randomlyPlaceShips(computer, newGameBoard);
console.log(newGameBoard.gameBoardArray);
