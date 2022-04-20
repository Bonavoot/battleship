const ship = require("./ship");

let gameBoard = function () {
  let gameBoardArray = [];
  for (let i = 0; i < 100; i++) {
    if (i < 10) {
      gameBoardArray.push(i);
    }
  }

  function placeShip(coords, ship) {
    gameBoardArray.splice(coords, ship.shipArray.length, "o");

    for (let i = 0; i < ship.shipArray.length; i++) {
      gameBoardArray.splice(coords, 0, ship.shipArray[i]);
      coords++;
    }
    console.log(gameBoardArray);
  }

  function receiveAttack(coords) {
    if (gameBoardArray[coords] == "o") {
      gameBoardArray[coords] = "x";
      return "hit";
      console.log(gameBoardArray);
    } else if (
      gameBoardArray[coords] == "x" ||
      gameBoardArray[coords] == "miss"
    ) {
      return "already hit/missed";
    } else if (gameBoardArray[coords] <= 99) {
      gameBoardArray[coords] = "miss";
      return "miss";
    }
    console.log(gameBoardArray);
  }

  return {
    gameBoardArray,
    placeShip,
    receiveAttack,
  };
};

module.exports = gameBoard;

// Render Board
//   for(let i = 0; i <= 100; i++) { gameBoardArray.push() }
// gameboardArray[0], ship1
