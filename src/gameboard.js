const ship = require("./ship");

let gameBoard = function () {
  let gameBoardArray = [];
  for (let i = 0; i < 100; i++) {
    if (i < 10) {
      gameBoardArray.push(i);
    }
  }

  function placeShip(coords, ship) {
    gameBoardArray.splice(coords, ship.shipArray.length - 1, "o");

    for (let i = 0; i < ship.shipArray.length - 1; i++) {
      gameBoardArray.splice(coords, 0, ship.shipArray[i]);
      coords++;
    }
  }

  function receiveAttack(coords) {
    if (gameBoardArray[coords] == "o") {
      gameBoardArray[coords] = "x";
      return "hit";
    } else if (
      gameBoardArray[coords] == "x" ||
      gameBoardArray[coords] == "miss"
    ) {
      return "already hit/missed";
    } else if (gameBoardArray[coords] <= 99) {
      gameBoardArray[coords] = "miss";
      return "miss";
    }
  }

  function allShipsSunk() {
    if (!gameBoardArray.includes("o")) {
      return "Game Over";
    } else {
      return "Ships remain";
    }
  }

  return {
    gameBoardArray,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

module.exports = gameBoard;

// Render Board
//   for(let i = 0; i <= 100; i++) { gameBoardArray.push() }
// gameboardArray[0], ship1
