const CLOSING_SCREEN = (creator) => `
---------------------------
######### EXITING #########
---------------------------
GOODBYE, ${creator.toUpperCase()}!
`;

export default function closeBlockchain(context) {
  console.log(CLOSING_SCREEN(context.creator));
  setTimeout(() => console.log('SAVING...'), 3000);
  context.read.close();
  process.exit();
}
