let ship = function (shipLength) {
  let shipArray = [];
  for (let i = 0; i < shipLength - 1; i++) {
    shipArray.push("o");
  }

  function hit(index) {
    let getIndex = shipArray.indexOf(index);

    shipArray.splice(getIndex, 1);

    return shipArray;
  }

  function isSunk() {
    return shipArray.length == 0 ? true : false;
  }
  return {
    shipArray,
    hit,
    isSunk,
  };
};

module.exports = ship;

// splice(coord, ship.length, replaceWithShipArray)
