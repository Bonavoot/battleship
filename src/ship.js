let ship = function (shipLength) {
  let shipArray = [];
  for (let i = 0; i < shipLength; i++) {
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

export default ship;

//module.exports = ship;
