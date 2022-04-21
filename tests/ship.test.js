const ship = require("../src/ship");

test("Does the length turn into an array properly", () => {
  const ship1 = ship(4);

  expect(ship1.shipArray).toEqual(["o", "o", "o", "o"]);
});

test("Does ship.hit(index) remove arr item properly?", () => {
  const ship1 = ship(4);
  ship1.hit(0);
  expect(ship1.shipArray).toEqual(["o", "o", "o"]);
});

test("#isSunk", () => {
  const ship1 = ship(4);
  ship1.hit(0);
  ship1.hit(1);
  ship1.hit(2);
  ship1.hit(3);

  expect(ship1.isSunk()).toBe(true);
});
