const { expect } = require('chai');
const { describe, it } = require('mocha');
const { checkForShip } = require('../game/logic/ship_methods');

describe('checkForShip', () => {
  it('should correctly report no ship at a given players coordinate', () => {
    expect(checkForShip(player, [9, 9]));
  });
});
