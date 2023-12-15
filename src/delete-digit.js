const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringNumber = n.toString();
  let maxNum = 0;
  
  for (i = 0; i < stringNumber.length; i += 1) {
      const numberToCheck = stringNumber.slice(0, i) + stringNumber.slice (i + 1);
  
      if (numberToCheck > maxNum) {
          maxNum = +numberToCheck;
      }
  }
  
  return maxNum;
} 

module.exports = {
  deleteDigit
};
