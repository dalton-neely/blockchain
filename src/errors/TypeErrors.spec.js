import { describe, it } from 'mocha';
import { expect } from 'chai';
import { numberTypeError, stringTypeError, typeError } from './TypeErrors';
import {
  STRING, INTEGER, FOO, BAR,
} from '../test-utils';

describe('typeError', () => {
  it('should return a correctly formatted error message', () => {
    expect(typeError(STRING, 'string', INTEGER).message)
      .to.match(/^.* should be of type .* but received type number$/);
  });
});

describe('stringTypeError', () => {
  it('should return a correctly formatted error message', () => {
    expect(stringTypeError(FOO, INTEGER).message)
      .to.match(/^foo.*number$/);
  });
});

describe('numberTypeError', () => {
  it('should return a correctly formatted error message', () => {
    expect(numberTypeError(BAR, STRING).message)
      .to.match(/^bar.*string$/);
  });
});
