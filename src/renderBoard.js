let renderBoard = function (gameBoardArray) {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  gameBoardArray.forEach((elem) => {
    let cell = document.createElement("div");
    cell.classList.add(`${elem}`);
    container.appendChild(cell);
  });
};

export default renderBoard;
