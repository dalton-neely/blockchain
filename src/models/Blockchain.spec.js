import { describe, it } from 'mocha';
import { expect } from 'chai';
import Hashes from 'jshashes';
import sinon from 'sinon';
import Blockchain from './Blockchain';
import { BAR, FOO, INTEGER } from '../test-utils';
import Transaction from './Transaction';

const sha256 = new Hashes.SHA256();

describe('Blockchain', () => {
  const hashFunctionSub = sinon.stub(sha256, 'hex');
  const blockchain = new Blockchain('0000', sha256, FOO);
  const transaction = new Transaction(FOO, BAR, 100);
  blockchain.addTransaction(transaction);
  hashFunctionSub.returns(`${blockchain.target}${Math.random() * 999999}`);

  it('should be able to add a transaction to its pending transactions', () => {
    const newTransaction = new Transaction(BAR, FOO, INTEGER);
    blockchain.addTransaction(newTransaction);

    expect(blockchain.pending[1]).to.eq(newTransaction);
  });

  it('should create a genesis block with the hash as the target', () => {
    expect(blockchain.blocks[0].hash).to.eq(blockchain.target);
  });

  it('should give the starting balance to the creator', () => {
    expect(blockchain.balance(FOO)).to.eq(blockchain.startingAmount);
  });

  it('should be able to mine pending transactions and reset the pending transactions', () => {
    blockchain.mine();
    expect(blockchain.pending.length).to.eq(0);
    expect(blockchain.blocks.length).to.eq(2);
  });

  it('should be able to retrieve a balance when the balance goes down', () => {
    const actual = blockchain.balance(FOO);
    const expected = 999900;

    expect(actual).to.eq(expected);
  });

  it('should be able to retrieve a balance when the balance goes up', () => {
    const plusTransaction = new Transaction(BAR, FOO, 100);
    blockchain.addTransaction(plusTransaction);
    blockchain.mine();

    expect(blockchain.balance(FOO)).to.eq(blockchain.startingAmount);
  });

  it('should be able to restore a blockchain from JSON', () => {
    const json = {
      target: '0000',
      hashFunction: {},
      startingAmount: 1000000,
      blocks: [
        {
          transactions: [
            {
              from: {
                key: '0',
              },
              to: {
                key: FOO,
              },
              data: 1000000,
              timestamp: 1589085709082,
            },
          ],
          hash: '0000',
          nonce: 0,
          previousHash: null,
        },
      ],
      pending: [
        {
          from: {
            key: FOO,
          },
          to: {
            key: BAR,
          },
          data: 500,
          timestamp: 1589085716439,
        },
      ],
    };

    const newBlockchain = new Blockchain('0000', {}, FOO);
    const newTransaction = new Transaction(FOO, BAR, 500);
    newTransaction.timestamp = 1589085716439;
    newBlockchain.addTransaction(newTransaction);
    newBlockchain.blocks[0].transactions[0].timestamp = 1589085709082;

    expect(Blockchain.restore(json)).to.deep.eq(newBlockchain);
  });
});
