const expect = require("chai");

describe("checkForShip", () => {
  const { checkForShip } = require("../game/logic/ship_methods");
  it("should correctly report no ship at a given players coordinate", () => {
    expect(checkForShip(player, [9, 9]));
  });
});
