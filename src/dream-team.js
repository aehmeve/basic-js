const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let dreamTeamName = '';
  let firstLetter;
  let noWhitespace = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      noWhitespace.push(members[i].replaceAll(' ', '').toUpperCase());
    }
  }

  noWhitespace.sort();

  for (i = 0; i < noWhitespace.length; i += 1) {
      if (typeof noWhitespace[i] === 'string') {
        firstLetter = noWhitespace[i][0];
        dreamTeamName += firstLetter;
      }
  }

  return dreamTeamName;
}

module.exports = {
  createDreamTeam
};
