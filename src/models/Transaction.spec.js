import { describe, it } from 'mocha';
import { expect } from 'chai';
import Transaction from './Transaction';
import {
  BAR, FOO, INTEGER, STRING,
} from '../test-utils';

describe('Transaction', () => {
  it('should throw an error when the transaction to or from is not a string', () => {
    expect(() => new Transaction(INTEGER, STRING, INTEGER)).to.throw(/^PublicKey.*string.*number$/);
    expect(() => new Transaction(STRING, INTEGER, INTEGER)).to.throw(/^PublicKey.*string.*number$/);
  });

  it('should be able to create a string for hashing', () => {
    const transaction = new Transaction(FOO, BAR, INTEGER);

    const expected = /^foobar0[0-9]*$/;
    const actual = transaction.stringForHashing();

    expect(actual).to.match(expected);
    expect(typeof actual).to.have.string('string');
  });

  it('should be able to restore from JSON', () => {
    const transaction = new Transaction(FOO, BAR, 500);
    transaction.timestamp = 1589085716439;
    const json = {
      from: {
        key: FOO,
      },
      to: {
        key: BAR,
      },
      data: 500,
      timestamp: 1589085716439,
    };

    expect(Transaction.restore(json)).to.deep.eq(transaction);
  });

  it('should be able to restore from an array of transactions', () => {
    const transactions = [
      new Transaction(FOO, BAR, 500),
      new Transaction(BAR, FOO, 300),
    ];
    transactions[0].timestamp = 1589085716439;
    transactions[1].timestamp = 1589085716459;
    const json = [
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
      {
        from: {
          key: BAR,
        },
        to: {
          key: FOO,
        },
        data: 300,
        timestamp: 1589085716459,
      },
    ];
    expect(Transaction.restoreAll(json)).to.deep.eq(transactions);
  });
});
