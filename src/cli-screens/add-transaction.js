/* eslint-disable import/no-cycle */
import { Transaction } from '../models';
import transactionMenu from './transaction-menu';

export default function addTransaction(context) {
  context.read.question('TO: ', (to) => {
    context.read.question('AMOUNT: ', (amount) => {
      context.blockchain.addTransaction(new Transaction(context.creator, to, Number(amount)));
      transactionMenu(context);
    });
  });
}
