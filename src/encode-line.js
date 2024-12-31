const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let curSeqLength = 1;
  let curSymbol = '';

  for (let i = 0; i < str.length; i += 1) {
    if (curSymbol != str[i]) curSymbol = str[i];
    if (str[i] === str[i + 1]) {
      curSeqLength += 1;
    } else {
      curSeqLength === 1 ? result = result + `${curSymbol}` : result = result + `${curSeqLength}${curSymbol}`;
      curSeqLength = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
