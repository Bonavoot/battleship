let gameBoard = function () {
  let gameBoardArray = [];
  for (let i = 0; i < 100; i++) {
    gameBoardArray.push(i);
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
      gameBoardArray[coords] = "hit";
      return "hit";
    } else if (gameBoardArray[coords] <= 99) {
      gameBoardArray[coords] = "miss";
      return "miss";
    } else if (
      gameBoardArray[coords] == "hit" ||
      gameBoardArray[coords] == "miss"
    ) {
      return "already hit/missed";
    }
  }

  function allShipsSunk() {
    return !gameBoardArray.includes("o") ? "Game Over" : "Ships remain";
  }

  return {
    gameBoardArray,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

module.exports = gameBoard;
