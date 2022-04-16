let ship = function (length) {
  return {
    length,
    hit: function (coord) {
      // use coord to find hit location
    },
    isSunk: function () {
      // use length to determine if sunk or not
    },
  };
};

ship.isSunk = true;

console.log(ship.isSunk);
