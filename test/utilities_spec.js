const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const { gatherNamesOf, titleCase } = require('../utilities/utilities');

describe('gatherNamesOf', () => {
  let people;
  let names;

  beforeEach(() => {
    people = [{
      name: 'Günter',
    },
    {
      name: 'Marceline',
    },
    {
      name: 'Simon',
    }];
    names = gatherNamesOf(people);
  });

  it('should return an array', () => {
    expect(names).to.be.an('array');
  });

  it('should give me output the same length as the input', () => {
    expect(names.length).to.equal(people.length);
  });

  it('should give me the name of the object passed in', () => {
    expect(names[0]).to.equal(people[0].name);
  });
});

describe('titleCase', () => {
  it('should return a string', () => {
    expect(titleCase('some string')).to.be.a('string');
  });
  it('should return a single capital letter', () => {
    expect(titleCase('a')).to.equal('A');
  });
  it('should return a single capitalized word', () => {
    expect(titleCase('vertigo')).to.equal('Vertigo');
  });
  it('should return a title cased string', () => {
    expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
  });
});
