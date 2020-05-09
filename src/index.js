import Hashes from 'jshashes';
import { Transaction, BlockChain } from './models';

const sha256 = new Hashes.SHA256();

const blockChain = new BlockChain('0000', sha256, 'dalton');

const transactionOne = new Transaction('dalton', 'taylor', 1000);
const transactionTwo = new Transaction('taylor', 'dalton', 500);

blockChain.transaction(transactionOne);
blockChain.transaction(transactionTwo);
blockChain.mine();

console.log(blockChain.balance('dalton'));
blockChain.transaction(new Transaction('dalton', 'tom', 406));
blockChain.mine();
console.log(blockChain.balance('dalton'));
