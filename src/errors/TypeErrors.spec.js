import { describe, it } from 'mocha';
import { expect } from 'chai';
import { numberTypeError, stringTypeError, typeError } from './TypeErrors';
import {
  STRING, INTEGER, FOO, BAR,
} from '../test-utils';

const FORMATTED_MESSAGE = 'should return a correctly formatted error message';

describe('typeError', () => {
  it(FORMATTED_MESSAGE, () => {
    expect(typeError(STRING, 'string', INTEGER).message)
      .to.match(/^.* should be of type .* but received type number$/);
  });
});

describe('stringTypeError', () => {
  it(FORMATTED_MESSAGE, () => {
    expect(stringTypeError(FOO, INTEGER).message)
      .to.match(/^foo.*number$/);
  });
});

describe('numberTypeError', () => {
  it(FORMATTED_MESSAGE, () => {
    expect(numberTypeError(BAR, STRING).message)
      .to.match(/^bar.*string$/);
  });
});
