import fs from 'fs';
import { Blockchain } from '../models';

export default class DataService {
  constructor() {
    this.fs = fs;
    this.fileName = '.blockchain.json';
  }

  getBlockchain(callback) {
    fs.readFile(this.fileName, 'utf8', (err, data) => {
      const blockchain = Blockchain.restore(JSON.parse(data));
      callback(err, blockchain);
    });
  }

  setBlockchain(blockchain, callback) {
    fs.writeFile(this.fileName, JSON.stringify(blockchain, null, 2), (err) => {
      callback(err);
    });
  }
}
