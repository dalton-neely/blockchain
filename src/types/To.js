import { stringTypeError } from '../errors';

export default class To {
  constructor(to) {
    if (typeof to !== 'string') {
      throw stringTypeError(this.constructor.name, to);
    }
    this.to = to;
  }
}
