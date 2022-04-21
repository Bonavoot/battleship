import "./style.css";
import players from "./players";
import ship from "./ship";
import gameBoard from "./gameboard";

let player1 = players();
let ship1 = ship(3);
let newGameBoard = gameBoard();

console.log(newGameBoard);
console.log(ship1);
console.log(player1);
