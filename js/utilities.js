function gatherNamesOf(arrayOfPeople) {
  return arrayOfPeople.map(person => person.name);
}

module.exports.gatherNamesOf = gatherNamesOf;
