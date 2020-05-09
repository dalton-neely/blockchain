import { describe, it } from 'mocha';
import { expect } from 'chai';
import To from './To';

const STRING = 'foo';
const INTEGER = 1;

describe('To', () => {
  it('should not throw an error when the type is string', () => {
    expect(() => new To(STRING)).to.not.throw();
  });

  it('should throw an error when a string is not passed', () => {
    expect(() => new To(INTEGER)).to.throw('To should be of type string but received type number');
  });
});
