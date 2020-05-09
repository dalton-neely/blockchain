import From from './From';

export default class Transaction {
  constructor(from, to, data) {
    this.from = new From(from);
    this.to = to;
    this.data = data;
    this.timestamp = Date.now();
  }
}
