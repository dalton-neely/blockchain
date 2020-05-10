import Transaction from './Transaction';

export default class Block {
  constructor(previousHash) {
    this.transactions = [];
    this.hash = '';
    this.nonce = 0;
    this.previousHash = previousHash;
  }

  stringForHashing() {
    return this.transactions.reduce((str, transaction) => str + transaction.stringForHashing(), '');
  }

  generateHash(hashFunction, target) {
    while (!this.hash.startsWith(target)) {
      this.nonce += 1;
      this.hash = hashFunction.hex(this.stringForHashing() + this.nonce);
    }
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  static restore(jsonObj) {
    const block = new Block(jsonObj.previousHash);
    block.hash = jsonObj.hash;
    block.nonce = jsonObj.nonce;
    block.transactions = Transaction.restoreAll(jsonObj.transactions);
    return block;
  }

  static restoreAll(jsonArray) {
    const blocks = [];
    jsonArray.forEach((block) => {
      blocks.push(this.restore(block));
    });
    return blocks;
  }
}
