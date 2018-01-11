const { expect } = require('chai');
const { describe, it } = require('mocha');
const { titleCase } = require('../js/textUtilities');


describe('textUtilities', () => {
  it('should return a title cased string', () => {
    expect(titleCase('the great mouse detective')).to.be.a('string');
    expect(titleCase('a')).to.equal('A');
    expect(titleCase('vertigo')).to.equal('Vertigo');
    expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
  });
});
