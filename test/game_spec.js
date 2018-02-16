/* eslint-env mocha */
const { expect } = require('chai');
const { takeTurn, checkGameStatus } = require('../game/logic/game_instance');

describe('GAME INSTANCE FUNCTIONS', () => {
  describe('checkGameStatus', () => {
    it('should tell me when the game is over');
  });
  describe('takeTurn', () => {
    let guess;
    let player;
    beforeEach(() => {
      guess = () => [0, 0];
      player = {
        ships: [
          {
            locations: [[0, 0]],
            damage: [],
          },
        ],
      };
    });
    it('should return false if the game ends', () => {
      const actual = takeTurn(player, guess);
      // eslint-disable-next-line
      expect(actual).to.be.false;
    });
  });
  xit('some other stuff', () => {});
});
