const gameBoard = require("../src/gameboard");
const ship = require("../src/ship");
const player = require("../src/players");

test("#placeShip", () => {
  let ship1 = ship(4);
  let newGameboard = gameBoard();
  newGameboard.placeShip(0, ship1);

  expect(newGameboard.gameBoardArray[2]).toBe("o");
});

test("#receiveAttack", () => {
  let ship1 = ship(4);
  let newGameboard = gameBoard();
  newGameboard.placeShip(0, ship1); // places ship at 0 - 3 indexes
  newGameboard.receiveAttack(8);
  expect(newGameboard.receiveAttack(3)).toBe("hit");
});

test("#allShipsSunk", () => {
  let ship1 = ship(2);
  let newGameboard = gameBoard();
  newGameboard.placeShip(0, ship1); // places ship at 0 - 3 indexes
  newGameboard.receiveAttack(0);
  newGameboard.receiveAttack(1);
  expect(newGameboard.allShipsSunk()).toBe("Game Over");
});

// players test

test("#randomMove", () => {
  let computer = player();
  let newGameboard = gameBoard();
  let move = computer.randomMove(newGameboard.gameBoardArray);

  newGameboard.receiveAttack(move);

  expect(newGameboard.gameBoardArray[move]).toBe("miss");
});
