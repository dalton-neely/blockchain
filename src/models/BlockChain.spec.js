import { describe, it } from 'mocha';
import { expect } from 'chai';
import Hashes from 'jshashes';
import sinon from 'sinon';
import BlockChain from './BlockChain';
import { BAR, FOO, INTEGER } from '../test-utils';
import Transaction from './Transaction';

const sha256 = new Hashes.SHA256();

describe('BlockChain', () => {
  const hashFunctionSub = sinon.stub(sha256, 'hex');
  const blockchain = new BlockChain('0000', sha256, FOO);
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
});
