const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const surroundingCoords = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]
  let setup = matrix.map((arr) => arr.map((val) => {
    if (!val) return 0;
    return val;
  }));

  for (let i = 0; i < setup.length; i += 1) {
    for (let j = 0; j < setup[i].length; j += 1) {
      if (setup[i][j] === true) {
        console.log(`coords ${i} ${j}`);
        for (let k = 0; k < surroundingCoords.length; k += 1) {
          if (
            i + surroundingCoords[k][0] >= 0 &&
            i + surroundingCoords[k][0] < setup.length &&
            j + surroundingCoords[k][1] >= 0 &&
            j + surroundingCoords[k][1] < setup[i].length
          ) {
            if (setup[i + surroundingCoords[k][0]][j + surroundingCoords[k][1]] !== true) {
              setup[i + surroundingCoords[k][0]][j + surroundingCoords[k][1]] += 1;
            }
          }
        }
      }
    }
  }

  setup = setup.map((arr) => arr.map((val) => {
    if (val === true) return 1;
    return val;
  }));

  return setup;
}

module.exports = {
  minesweeper
};
