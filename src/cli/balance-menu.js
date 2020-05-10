/* eslint-disable import/no-cycle */
import callWindow from './call-window';
import unrecognizedInput from './unrecongnized-input';
import mainMenu from './main-menu';

const BALANCE_MENU = (balance) => `
---------------------------
######### BALANCE #########
---------------------------
CURRENT BALANCE: ${balance}

[X]: RETURN TO MAIN MENU
`;

export default function balanceMenu(context) {
  context.read.question(BALANCE_MENU(context.blockchain.balance(context.creator)), (answer) => {
    switch (answer) {
      case 'x':
      case 'X':
        callWindow(() => mainMenu(context));
        break;
      default:
        unrecognizedInput(() => balanceMenu(context));
    }
  });
}
