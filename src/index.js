import "./style.css";
import players from "./players";
import ship from "./ship";
import gameBoard from "./gameboard";
import renderBoard from "./renderBoard";

let newGameBoard = gameBoard();

renderBoard(newGameBoard.gameBoardArray);
