import express from 'express';

const PORT = 80;
const app = express();
app.use(express.static('dist/static'));

app.listen(PORT, () => console.log(`Running Blockchain Server on port ${PORT}`));
