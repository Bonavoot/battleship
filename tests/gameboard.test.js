const gameBoard = require("../src/gameboard");
const ship = require("../src/ship");

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
