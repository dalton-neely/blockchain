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

  static restore(jsonObj) {
    const transaction = new Transaction(jsonObj.from.key, jsonObj.to.key, jsonObj.data);
    transaction.timestamp = jsonObj.timestamp;
    return transaction;
  }

  static restoreAll(jsonArray) {
    const transactions = [];
    jsonArray.forEach((transaction) => {
      transactions.push(this.restore(transaction));
    });
    return transactions;
  }
}
