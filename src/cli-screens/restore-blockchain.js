/* eslint-disable import/no-cycle */
import fs from 'fs';
import { Blockchain } from '../models';
import mainMenu from './main-menu';
import callWindow from './call-window';

export default function restoreBlockchain(context) {
  fs.readFile('.blockchain.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Could not restore blockchain');
    }
    context.blockchain = Blockchain.restore(JSON.parse(data));
    callWindow(() => mainMenu(context));
  });
}
