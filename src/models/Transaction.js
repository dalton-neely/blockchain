import { PublicKey } from '../types';

export default class Transaction {
  constructor(from, to, data) {
    this.from = new PublicKey(from);
    this.to = new PublicKey(to);
    this.data = data;
    this.timestamp = Date.now();
  }

  stringForHashing() {
    return `${this.from.key}${this.to.key}${this.data}${this.timestamp}`;
  }
}
