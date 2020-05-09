import { describe, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import Hashes from 'jshashes';
import Transaction from './Transaction';
import { BAR, FOO, INTEGER } from '../test-utils';
import Block from './Block';

const sha256 = new Hashes.SHA256();

describe('Block', () => {
  const transactions = [
    new Transaction(FOO, BAR, INTEGER),
    new Transaction(BAR, FOO, INTEGER),
  ];
  const block = new Block(0);
  Object.keys(transactions).forEach((key) => block.addTransaction(transactions[key]));

  it('should reduce all transactions down to one string used for hashing', () => {
    const expected = /^foobar0[0-9]*barfoo0[0-9]*$/;
    const actual = block.stringForHashing();

    expect(actual).to.match(expected);
  });

  it('should generate a hash with the target amount proof of work', () => {
    const hashFunctionStub = sinon.stub(sha256, 'hex');
    const target = '0000';
    hashFunctionStub
      .onFirstCall()
      .returns('34564433')
      .onSecondCall()
      .returns('000000');
    const expected = /^0000.*/;
    block.generateHash(sha256, target);
    const actual = block.hash;

    expect(actual).to.match(expected);
  });

  it('should be able to add a transaction to the the list of transactions', () => {
    const newTransaction = new Transaction(FOO, BAR, INTEGER);
    block.addTransaction(newTransaction);

    expect(block.transactions[2]).to.eq(newTransaction);
  });
});
