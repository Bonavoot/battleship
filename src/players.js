let players = function () {
  function randomMove(arr) {
    let move;
    do {
      move = Math.floor(Math.random() * arr.length);
    } while (arr[move] == "hit" || arr[move] == "miss");

    return move;
  }

  return {
    randomMove,
  };
};

module.exports = players;
