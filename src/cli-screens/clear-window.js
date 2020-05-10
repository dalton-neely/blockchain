export default function clearWindow() {
  const lines = process.stdout.getWindowSize()[1];
  for (let i = 0; i < lines; i += 1) {
    console.log('\r\n');
  }
}
