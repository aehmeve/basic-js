const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new TypeError("'arr' parameter must be an instance of the Array!")
  } else if (arr.length === 0) {
    return [];
  }

  let newArray = [];
  let correctArray = [];

  let commands = ['--discard-next','--discard-prev','--double-next','--double-prev']

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      newArray.push('');
      i += 1;
    } else if (arr[i] === '--discard-prev') {
      newArray.pop();
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        newArray.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0) {
        newArray.push(newArray[newArray.length - 1]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }

  for (let i = 0; i < newArray.length; i += 1) {
    if (newArray[i] !== '') {
      correctArray.push(newArray[i]);
    }
  }

  return correctArray;
}

module.exports = {
  transform
};
