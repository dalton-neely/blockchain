import clearWindow from './clear-window';

export default function callWindow(windowCallback) {
  clearWindow();
  windowCallback.call();
}
