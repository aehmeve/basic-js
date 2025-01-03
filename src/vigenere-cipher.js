const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct) {
    this.mode = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new TypeError('Incorrect arguments!');
    }

    let encryptedMessage = '';
    let indexForKey = 0;
    let str = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i += 1) {

      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) { // encrypt character
        let positionsToMove = key.charCodeAt(indexForKey) - 65;
        let encryptedCharacter = String.fromCharCode(str.charCodeAt(i) + positionsToMove);

        if (encryptedCharacter.charCodeAt(0) > 90) {
          let positionOverflow = encryptedCharacter.charCodeAt(0) - 91;

          encryptedCharacter = String.fromCharCode(65 + positionOverflow);
          encryptedMessage += encryptedCharacter;
        } else {
          encryptedMessage += encryptedCharacter;
        }

        indexForKey += 1;

        if (indexForKey > key.length - 1) {  // restart indexForKey
          indexForKey = 0;
        }
      } else {
        encryptedMessage += str.charAt(i);
      }
    }

    if (this.mode === false) {
      let messageArray = encryptedMessage.split('')
      encryptedMessage = messageArray.reverse().join('');
    }

    return encryptedMessage;
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new TypeError('Incorrect arguments!');
    }

    let decryptedMessage = '';
    let indexForKey = 0;
    let str = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i += 1) {

      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) { // decrypt character
        let positionsToMove = key.charCodeAt(indexForKey) - 65;
        let decryptedCharacter = String.fromCharCode(str.charCodeAt(i) - positionsToMove);

        if (decryptedCharacter.charCodeAt(0) < 65) {
          let positionOverflow = 64 - decryptedCharacter.charCodeAt(0);

          decryptedCharacter = String.fromCharCode(90 - positionOverflow);
          decryptedMessage += decryptedCharacter;
        } else {
          decryptedMessage += decryptedCharacter;
        }

        indexForKey += 1;

        if (indexForKey > key.length - 1) {  // restart indexForKey
          indexForKey = 0;
        }
      } else {
        decryptedMessage += str.charAt(i);
      }
    }

    if (this.mode === false) {
      let messageArray = decryptedMessage.split('')
      decryptedMessage = messageArray.reverse().join('');
    }

    return decryptedMessage;
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  VigenereCipheringMachine
};
