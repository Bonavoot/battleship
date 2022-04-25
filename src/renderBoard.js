let renderBoard = function (gameBoardArray) {
  const playerOneBoard = document.createElement("div");
  playerOneBoard.classList.add("player-one-board");
  document.body.appendChild(playerOneBoard);

  const playerTwoBoard = document.createElement("div");
  playerTwoBoard.classList.add("player-two-board");
  document.body.appendChild(playerTwoBoard);
  let index = 0;
  let letter = "A";
  let counter = 0;

  // Places array elements as cells in the DOM for the HUMAN board
  gameBoardArray.forEach((elem) => {
    let cell = document.createElement("div");
    cell.classList.add("player-one-cell");
    index++;

    // Adds letters on Y axis of grid
    if (index < 11) {
      let coordLetter = document.createElement("div");
      coordLetter.textContent = letter;
      coordLetter.classList.add("coord-letter");
      cell.appendChild(coordLetter);
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }

    //Adds numbers on X axis of grid
    if (index % 10 == 0) {
      ++counter;
      let coordNum = document.createElement("div");
      coordNum.classList.add("coord-num");
      coordNum.textContent = counter;
      cell.appendChild(coordNum);
    }
    cell.setAttribute("id", `${elem}`);
    playerOneBoard.appendChild(cell);
  });

  // Places array elements as cells in the DOM for the COMPUTER board
  let indexCPU = 0;
  let letterCPU = "A";
  let counterCPU = 0;

  gameBoardArray.forEach((elem) => {
    let cell = document.createElement("div");
    cell.classList.add("computer-cell");
    indexCPU++;
    // Adds letters on Y axis of grid
    if (indexCPU < 11) {
      let coordLetter = document.createElement("div");
      coordLetter.textContent = letterCPU;
      coordLetter.classList.add("coord-letter-cpu");
      cell.appendChild(coordLetter);
      letterCPU = String.fromCharCode(letterCPU.charCodeAt(0) + 1);
    }
    //Adds numbers on X axis of grid
    if (indexCPU % 10 == 0) {
      ++counterCPU;
      let coordNum = document.createElement("div");
      coordNum.classList.add("coord-num-cpu");
      coordNum.textContent = counterCPU;
      cell.appendChild(coordNum);
    }

    cell.setAttribute("id", `computer ${elem}`);
    playerTwoBoard.appendChild(cell);
  });
};

export default renderBoard;
