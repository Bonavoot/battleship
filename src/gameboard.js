const ship = require("./ship");

let gameBoard = function () {
  let gameBoardArray = [];
  for (let i = 0; i < 100; i++) {
    if (i < 10) {
      gameBoardArray.push(i);
    }
  }

  function placeShip(coords, ship) {
    gameBoardArray.splice(coords, ship.length);

    for (let i = 0; i < ship.length; i++) {
      gameBoardArray.splice(coords, 0, ship.shipSize[i]);
      coords++;
    }
  }

  function receiveAttack(coords) {}

  return {
    gameBoardArray,
    placeShip,
    receiveAttack,
  };
};

module.exports = gameBoard;

// Render Board
//   for(let i = 0; i <= 100; i++) { gameBoardArray.push() }
