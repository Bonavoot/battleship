import ship from "./ship";

let players = function () {
  const battleships = [ship(5), ship(4), ship(3), ship(3), ship(2)];
  function randomMove(arr) {
    let move;
    do {
      move = Math.floor(Math.random() * arr.length);
    } while (arr[move] == "hit" || arr[move] == "miss");

    return move;
  }

  return {
    randomMove,
    battleships,
  };
};

export default players;
//module.exports = players;
