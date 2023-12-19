const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = `${str}`;

  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.addition !== undefined) {
    options.addition = `${options.addition}`;
  }
  if (typeof options.addition === 'string' && options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition && options.additionRepeatTimes > 1 && options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  } else if (options.addition && options.additionRepeatTimes > 1) {
    options.additionSeparator = options.additionSeparator.toString();
  }

  let mainString = '';
  let additionString = '';
  let repeatedLine = '';

  if (options.addition) {
    if (typeof options.additionSeparator === 'string' && options.additionRepeatTimes > 1) {
      additionString = `${options.addition}${options.additionSeparator}`.repeat(options.additionRepeatTimes);
      additionString = additionString.slice(0, additionString.length - options.additionSeparator.length);
    } else {
      additionString = options.addition;
    }
  }

  if (options.repeatTimes > 1) {
    mainString = `${str}${additionString}${options.separator}`;
    mainString = mainString.slice(0, mainString.length - options.separator.length);
  } else if (options.repeatTimes === 1 && additionString) {
    mainString = `${str}${additionString}`;
  } else {
    mainString = `${str}`;
  }

  for (let i = 0; i < options.repeatTimes; i += 1) {
    repeatedLine += mainString
    if (i < options.repeatTimes - 1) {
      repeatedLine += `${options.separator}`;
    }
  }

  return repeatedLine;
}

module.exports = {
  repeater
};
