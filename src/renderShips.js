const renderShips = function (player) {
  let draggableShipContainer = document.createElement("div");
  draggableShipContainer.classList.add("ship-container");
  player.battleships.forEach((elem) => {
    let draggableShip = document.createElement("div");
    draggableShip.classList.add("drag-ship");
    draggableShip.setAttribute("draggable", "true");
    for (let i = 0; i < elem.shipArray.length; i++) {
      let shipElem = document.createElement("div");
      shipElem.classList.add("drag-ship-cell");
      draggableShip.appendChild(shipElem);
    }
    document.body.append(draggableShipContainer);
    draggableShipContainer.appendChild(draggableShip);
  });
};

const draggableShips = document.querySelectorAll(".drag-ship");
const containers = document.querySelector(".ship-container");

draggableShips.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
});

export default renderShips;
