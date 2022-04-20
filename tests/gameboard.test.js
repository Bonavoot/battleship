const gameBoard = require("../src/gameboard");
const ship = require("../src/ship");

test("#placeShip", () => {
  let ship1 = ship(4);
  let newGameboard = gameBoard();
  newGameboard.placeShip(1, ship1.length);

  expect(newGameboard.gameBoardArray[1]).toBe("o");
});
