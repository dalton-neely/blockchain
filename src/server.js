import express from 'express';

const PORT = 80;
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Blockchain Server');
});

app.listen(PORT, () => console.log(`Running Blockchain Server on port ${PORT}`));
