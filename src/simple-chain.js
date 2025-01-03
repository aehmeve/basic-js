const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  addLink(value = '') {
    this.chain.push(`( ${value} )`);

    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) && this.chain[position] !== undefined && position > 0) {
      this.chain.splice(position - 1, 1);

      return this;
    }
    this.chain = [];
    throw new Error(`You can't remove incorrect link!`);
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    const finishedChain = this.chain.join('~~');
    this.chain = [];

    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
