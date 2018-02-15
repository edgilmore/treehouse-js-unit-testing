/* eslint-env mocha */
const { expect } = require('chai');
const { checkForShip, damageShip, fire } = require('../game/logic/ship_methods');

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
  let ship = {
    locations: [[0, 0]],
    damage: [],
  };
  it('should register damage on a given ship at a given location', () => {
    ship = damageShip(ship, [0, 0]);
    // eslint-disable-next-line
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage).to.deep.include([0, 0]);
  });
});

describe('fire', () => {
  let player;
  beforeEach(() => {
    player = {
      ships: [
        {
          id: 1,
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
  });

  it('should record damage on the given players ship at a given coordinate', () => {
    fire(player, [0, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });
  it('should not record damage if there is no ship at coordinates', () => {
    fire(player, [0, 1]);
    // eslint-disable-next-line
    expect(player.ships[0].damage).to.be.empty;
  });
});
