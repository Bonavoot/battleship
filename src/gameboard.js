import ship from "./ship";

let gameBoard = function () {
  let gameBoardArray = [];
  for (let i = 0; i < 100; i++) {
    gameBoardArray.push(i);
  }

  function placeShip(coords, ship) {
    // Remove (to make vertical, put this in a loop and +10 on coords)
    gameBoardArray.splice(coords, ship.shipArray.length, "o");

    // Replace
    for (let i = 0; i < ship.shipArray.length - 1; i++) {
      gameBoardArray.splice(coords, 0, ship.shipArray[i]);
      coords++;
    }
  }

  // Get random VALID coordinate
  function getValidCoords(elem) {
    // If the battleship wraps, correct it to the row it was placed on
    let newCoord = 0;
    let randomCoord = Math.floor(Math.random() * gameBoardArray.length);
    console.log(randomCoord);
    switch (true) {
      case randomCoord < 10 && randomCoord + elem.shipArray.length > 9:
        newCoord = randomCoord + elem.shipArray.length - 10;
        return randomCoord - newCoord;
      case randomCoord > 9 &&
        randomCoord < 20 &&
        randomCoord + elem.shipArray.length > 19:
        newCoord = randomCoord + elem.shipArray.length - 20;
        return randomCoord - newCoord;
      case randomCoord > 19 &&
        randomCoord < 30 &&
        randomCoord + elem.shipArray.length > 29:
        newCoord = randomCoord + elem.shipArray.length - 30;
        return randomCoord - newCoord;
      case randomCoord > 29 &&
        randomCoord < 40 &&
        randomCoord + elem.shipArray.length > 39:
        newCoord = randomCoord + elem.shipArray.length - 40;
        return randomCoord - newCoord;
      case randomCoord > 39 &&
        randomCoord < 50 &&
        randomCoord + elem.shipArray.length > 49:
        newCoord = randomCoord + elem.shipArray.length - 50;
        return randomCoord - newCoord;
      case randomCoord > 49 &&
        randomCoord < 60 &&
        randomCoord + elem.shipArray.length > 59:
        newCoord = randomCoord + elem.shipArray.length - 60;
        return randomCoord - newCoord;
      case randomCoord > 59 &&
        randomCoord < 70 &&
        randomCoord + elem.shipArray.length > 69:
        newCoord = randomCoord + elem.shipArray.length - 70;
        return randomCoord - newCoord;
      case randomCoord > 69 &&
        randomCoord < 80 &&
        randomCoord + elem.shipArray.length > 79:
        newCoord = randomCoord + elem.shipArray.length - 80;
        return randomCoord - newCoord;
      case randomCoord > 79 &&
        randomCoord < 90 &&
        randomCoord + elem.shipArray.length > 89:
        newCoord = randomCoord + elem.shipArray.length - 90;
        return randomCoord - newCoord;
      case randomCoord > 89 &&
        randomCoord < 100 &&
        randomCoord + elem.shipArray.length > 99:
        newCoord = randomCoord + elem.shipArray.length - 100;
        return randomCoord - newCoord;
      default:
        return randomCoord;
    }
  }

  // Computer randomly ship placement method
  function randomlyPlaceShips(computerPlayer, gameBoard) {
    computerPlayer.battleships.forEach((elem) => {
      // Get random coord
      let randomCoord = getValidCoords(elem);

      console.log(randomCoord);
      gameBoard.placeShip(randomCoord, elem);
      try {
        for (let i = 0; i < elem.shipArray.length; i++) {
          document.getElementById(`computer ${randomCoord}`).id = "o";
          randomCoord++;
        }
      } catch (err) {}
    });
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
    randomlyPlaceShips,
    gameBoardArray,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

export default gameBoard;

// module.exports = gameBoard;
