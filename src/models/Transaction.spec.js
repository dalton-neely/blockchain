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
});
