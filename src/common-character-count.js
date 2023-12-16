const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCharacterCount = 0;
  let uniqueCharacters = [];

  if (!s1 || !s2) {
    return commonCharacterCount;
  }

  for (i = 0; i < s1.length; i += 1) {
    if (!uniqueCharacters.includes(s1[i])) {
      uniqueCharacters.push(s1[i]);
    }
  }

  for (i = 0; i < uniqueCharacters.length; i += 1) {
    let s1Count = 0;
    let s2Count = 0;

    for (j = 0; j < s1.length; j += 1) {
      if (s1[j] === uniqueCharacters[i]) {
        s1Count += 1;
      }
    }

    for (k = 0; k < s2.length; k += 1) {
      if (s2[k] === uniqueCharacters[i]) {
        s2Count += 1;
      }
    }

  commonCharacterCount += Math.min(s1Count, s2Count);
}

  return commonCharacterCount;
}

module.exports = {
  getCommonCharacterCount
};
