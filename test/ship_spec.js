const { expect } = require("chai");
const { describe, it } = require("mocha");

describe("checkForShip", () => {
  const { checkForShip } = require("../game/logic/ship_methods");
  it("should correctly report no ship at a given players coordinate", () => {
    expect(checkForShip(player, [9, 9]));
  });
});
