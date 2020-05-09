import { describe, it } from 'mocha';
import { expect } from 'chai';
import From from './From';
import { STRING, INTEGER } from '../test-utils';

describe('From', () => {
  it('should not throw an error when the type is string', () => {
    expect(() => new From(STRING)).to.not.throw();
  });

  it('should throw an error when a string is not passed', () => {
    expect(() => new From(INTEGER)).to.throw('From should be of type string but received type number');
  });
});
