function titleCase(title) {
  const words = title.split(' ');
  const titleCasedWords = words.map(word => `${word[0].toUpperCase()}${word.substring(1)}`);
  return titleCasedWords.join(' ');
}

module.exports.titleCase = titleCase;
