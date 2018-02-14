/* eslint-env mocha */
const { expect } = require('chai');
const { checkForShip, damageShip } = require('../game/logic/ship_methods');

describe('checkForShip', () => {
  const player = {
    ships: [
      { locations: [[0, 0], [0, 1], [9, 9]] },
      { locations: [[0, 1], [0, 0], [1, 2]] },
      { locations: [[0, 6], [1, 5], [9, 5]] },
    ],
  };
  it('should correctly report no ship at a given players coordinate', () => {
    // eslint-disable-next-line
    expect(checkForShip(player, [1, 1])).to.be.false;
  });
  it('should correctly report a ship present at given players coordiante', () => {
    // eslint-disable-next-line
    expect(checkForShip(player, [9, 9])).to.be.true;
  });
  it('should handle ships located at more than one coordinate', () => {
    // eslint-disable-next-line
    expect(checkForShip(player, [0, 1])).to.be.true;
    // eslint-disable-next-line
    expect(checkForShip(player, [2, 2])).to.be.false;
  });
  it('should handle checking multiple ships', () => {
    // eslint-disable-next-line
    expect(checkForShip(player, [1, 2])).to.be.true;
    // eslint-disable-next-line
    expect(checkForShip(player, [2, 2])).to.be.false;
    // eslint-disable-next-line
    expect(checkForShip(player, [0, 0])).to.be.true;
  });
});

describe('damageShip', () => {

})
