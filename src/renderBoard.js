let renderBoard = function (gameBoardArray) {
  const playerOneBoard = document.createElement("div");
  playerOneBoard.classList.add("player-one-board");
  document.body.appendChild(playerOneBoard);

  const playerTwoBoard = document.createElement("div");
  playerTwoBoard.classList.add("player-two-board");
  document.body.appendChild(playerTwoBoard);

  // Places array elements as cells in the DOM
  gameBoardArray.forEach((elem) => {
    let cell = document.createElement("div");
    cell.classList.add("player-one-cell");
    cell.setAttribute("id", `${elem}`);
    playerOneBoard.appendChild(cell);
  });

  gameBoardArray.forEach((elem) => {
    let cell = document.createElement("div");
    cell.classList.add("computer-cell");
    cell.setAttribute("id", `computer ${elem}`);
    playerTwoBoard.appendChild(cell);
  });
};

export default renderBoard;
