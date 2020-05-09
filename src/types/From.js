import { stringTypeError } from '../errors';

export default class From {
  constructor(from) {
    if (typeof from !== 'string') {
      throw stringTypeError(this.constructor.name, from);
    }
    this.from = from;
  }
}
