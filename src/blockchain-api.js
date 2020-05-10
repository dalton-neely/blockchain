import express from 'express';

const PORT = 80;
const app = express();

app.get('/', (req, res) => res.send('Welcome to the Blockchain API'));

app.listen(PORT, () => console.log(`Running Blockchain API on port ${PORT}`));
