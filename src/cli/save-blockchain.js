/* eslint-disable import/no-cycle */
import fs from 'fs';
import mainMenu from './main-menu';

export default function saveBlockchain(context) {
  fs.writeFile('.blockchain.json', JSON.stringify(context.blockchain, null, 2), (err) => {
    if (err) {
      console.log('Could not save blockchain');
    }
    mainMenu(context);
  });
}
