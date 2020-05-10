/* eslint-disable import/no-cycle */
import callWindow from './call-window';
import unrecognizedInput from './unrecongnized-input';
import addTransaction from './add-transaction';
import mainMenu from './main-menu';

const TRANSACTION_MENU = `
---------------------------
#### TRANSACTION MENU #####
---------------------------
[1]: NEW TRANSACTION
[X]: RETURN TO MAIN MENU
`;

export default function transactionMenu(context) {
  context.read.question(TRANSACTION_MENU, (answer) => {
    switch (answer) {
      case '1':
        callWindow(() => addTransaction(context));
        break;
      case 'x':
      case 'X':
        callWindow(() => mainMenu(context));
        break;
      default:
        unrecognizedInput(() => transactionMenu(context));
    }
  });
}
