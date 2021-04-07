const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const vertLetters = transpose(letters);
  if (vertLetters) {
    const verticalJoin = vertLetters.map(ls => ls.join(''));
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

const transpose = function(letters) {
  let dimY = letters.length;
  let dimX = letters[0].length;
  let rowArray = [];
  for (let y = 0; y < dimY; y++) {
    for (let x = 0; x < dimX; x++) {
      if (y === 0) {
        rowArray.push([]);
      }
      rowArray[x].push(letters[y][x]);
    }
  }
  return rowArray;
};

module.exports = wordSearch;