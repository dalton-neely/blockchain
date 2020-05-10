import Hashes from 'jshashes';
import readline from 'readline';
import fs from 'fs';
import { Transaction, BlockChain } from './models';

const sha256 = new Hashes.SHA256();

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let blockchain;
const target = '0000';
const creator = 'DALTON';

function clearWindow() {
  const lines = process.stdout.getWindowSize()[1];
  for (let i = 0; i < lines; i += 1) {
    console.log('\r\n');
  }
}

function callWindow(windowCallback) {
  clearWindow();
  windowCallback.call();
}

function unrecognizedInput(callback) {
  clearWindow();
  console.log('INVALID SELECTION: PLEASE TRY AGAIN.');
  callback.call();
}

function addTransaction() {
  read.question('TO: ', (to) => {
    read.question('AMOUNT: ', (amount) => {
      blockchain.addTransaction(new Transaction(creator, to, amount));
      transactionMenu();
    });
  });
}

const BALANCE_MENU = (balance) => `
---------------------------
######### BALANCE #########
---------------------------
CURRENT BALANCE: ${balance}

[X]: RETURN TO MAIN MENU
`;

function balanceMenu() {
  read.question(BALANCE_MENU(blockchain.balance(creator)), (answer) => {
    switch (answer) {
      case 'x':
      case 'X':
        callWindow(mainMenu);
        break;
      default:
        unrecognizedInput(balanceMenu);
    }
  });
}

const TRANSACTION_MENU = `
---------------------------
#### TRANSACTION MENU #####
---------------------------
[1]: NEW TRANSACTION
[X]: RETURN TO MAIN MENU
`;

function transactionMenu() {
  read.question(TRANSACTION_MENU, (answer) => {
    switch (answer) {
      case '1':
        callWindow(addTransaction);
        break;
      case 'x':
      case 'X':
        callWindow(mainMenu);
        break;
      default:
        unrecognizedInput(transactionMenu);
    }
  });
}

function saveBlockchain() {
  fs.writeFile('.blockchain.json', JSON.stringify(blockchain, null, 2), (err) => {
    if (err) {
      console.log('Could not save blockchain');
    }
    mainMenu();
  });
}

function restoreBlockchain() {
  fs.readFile('.blockchain.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Could not restore blockchain');
    }
    blockchain = JSON.parse(data);
    mainMenu();
  });
}

const MAIN_MENU = () => `
---------------------------
######## MAIN MENU ########
---------------------------
[1]: CREATE NEW BLOCKCHAIN
${(typeof blockchain !== 'undefined') ? '[2]: VIEW BALANCE\r\n[3]: MINE\r\n[4]: SAVE\r\n[X]: EXIT' : '[R]: RESTORE BLOCKCHAIN\r\n[X]: EXIT'}
`;

function mainMenu() {
  read.question(MAIN_MENU(), (answer) => {
    switch (answer) {
      case '1':
        blockchain = new BlockChain(target, sha256, creator);
        callWindow(transactionMenu);
        break;
      case '2':
        callWindow(balanceMenu);
        break;
      case '3':
        blockchain.mine();
        callWindow(mainMenu);
        break;
      case '4':
        saveBlockchain();
        break;
      case 'r':
      case 'R':
        restoreBlockchain();
        break;
      case 'x':
      case 'X':
        read.close();
        break;
      default:
        unrecognizedInput(mainMenu);
    }
  });
}

callWindow(mainMenu);
