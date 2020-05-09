import { describe, it } from 'mocha';
import { expect } from 'chai';
import PublicKey from './PublicKey';
import { STRING, INTEGER } from '../test-utils';

describe('PublicKey', () => {
  it('should not throw an error when the type is string', () => {
    expect(() => new PublicKey(STRING)).to.not.throw();
  });

  it('should throw an error when a string is not passed', () => {
    expect(() => new PublicKey(INTEGER)).to.throw('PublicKey should be of type string but received type number');
  });
});
