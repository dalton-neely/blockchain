import { stringTypeError } from '../errors';

export default class PublicKey {
  constructor(publicKey) {
    if (typeof publicKey !== 'string') {
      throw stringTypeError(this.constructor.name, publicKey);
    }
    this.key = publicKey;
  }
}
