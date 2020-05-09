import Block from './Block';
import Transaction from './Transaction';

export default class BlockChain {
  constructor(target, hashFunction, creator) {
    this.target = target;
    this.hasFunction = hashFunction;
    this.startingAmount = 1000000;
    this.blocks = [this.genesisBlock(creator)];
    this.pending = [];
  }

  addTransaction(transaction) {
    this.pending.push(transaction);
  }

  mine() {
    const block = new Block(this.target, this.blocks[this.blocks.length - 1].hash);
    this.pending.forEach((transaction) => block.addTransaction(transaction));
    block.generateHash(this.hasFunction, this.target);
    this.blocks.push(block);
    this.pending = [];
  }

  balance(id) {
    let sum = 0;
    this.blocks.forEach((block) => {
      block.transactions.forEach((transaction) => {
        if (transaction.to.key === id) {
          sum += transaction.data;
        }
        if (transaction.from.key === id) {
          sum -= transaction.data;
        }
      });
    });
    return sum;
  }

  genesisBlock(creator) {
    const block = new Block(null);
    block.addTransaction(new Transaction('0', creator, this.startingAmount));
    block.hash = this.target;
    return block;
  }
}
