import express from 'express';
import DataService from './api/DataService';

const PORT = 8080;
const app = express();
const dataService = new DataService();

app.get('/balance/:id', (req, res) => {
  const { id } = req.params;
  dataService.getBlockchain((err, blockchain) => {
    if (err) {
      res.send(JSON.stringify({ error: err.message }, null, 2));
    } else {
      res.send(JSON.stringify({ balance: blockchain.balance(id) }, null, 2));
    }
  });
});

app.listen(PORT, () => console.log(`Running Blockchain API on port ${PORT}`));
