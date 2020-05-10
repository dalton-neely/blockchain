import clearWindow from './clear-window';

export default function unrecognizedInput(callback) {
  clearWindow();
  console.log('INVALID SELECTION: PLEASE TRY AGAIN.');
  callback.call();
}
