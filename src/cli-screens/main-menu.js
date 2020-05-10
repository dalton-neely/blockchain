/* eslint-disable import/no-cycle */
import { Blockchain } from '../models';
import callWindow from './call-window';
import transactionMenu from './transaction-menu';
import balanceMenu from './balance-menu';
import saveBlockchain from './save-blockchain';
import restoreBlockchain from './restore-blockchain';
import closeBlockchain from './close-blockchain';
import unrecognizedInput from './unrecongnized-input';

const MAIN_MENU = (blockchain) => `
---------------------------
######## MAIN MENU ########
---------------------------
[1]: CREATE NEW BLOCKCHAIN
${(typeof blockchain !== 'undefined') ? '[2]: VIEW BALANCE\r\n[3]: MINE\r\n[4]: SAVE\r\n[X]: EXIT' : '[R]: RESTORE BLOCKCHAIN\r\n[X]: EXIT'}
`;

export default function mainMenu(context) {
  context.read.question(MAIN_MENU(context.blockchain), (answer) => {
    switch (answer) {
      case '1':
        context.blockchain = new Blockchain(context.target, context.hashFunction, context.creator);
        callWindow(() => transactionMenu(context));
        break;
      case '2':
        callWindow(() => balanceMenu(context));
        break;
      case '3':
        context.blockchain.mine();
        callWindow(() => mainMenu(context));
        break;
      case '4':
        saveBlockchain(context);
        break;
      case 'r':
      case 'R':
        restoreBlockchain(context);
        break;
      case 'x':
      case 'X':
        closeBlockchain(context);
        break;
      default:
        unrecognizedInput(() => mainMenu(context));
    }
  });
}
