import Hashes from 'jshashes';
import readline from 'readline';
import { callWindow, closeBlockchain, mainMenu } from './cli-screens';

const sha256 = new Hashes.SHA256();

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const context = {
  blockchain: undefined,
  target: '0000',
  creator: 'DALTON',
  read,
  hashFunction: sha256,
};

process.on('exit', () => {
  callWindow(() => closeBlockchain(context));
});

callWindow(() => mainMenu(context));
