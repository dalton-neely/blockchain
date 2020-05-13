import express from 'express';
import cors from 'cors';
import DataService from './api/DataService';

const PORT = 8080;
const app = express();
app.use(cors({
  origin: 'http://localhost',
}));

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

app.post('/transaction', (req, res) => {
  const toId = req.header('To');
  const from = req.header('From');
  const amount = req.header('Amount');
  dataService.getBlockchain((err) => {
    if (err || !toId || !from || !amount) {
      res.send(JSON.stringify({ error: err.message }, null, 2));
    } else {
      // blockchain.addTransaction(new Transaction(from, toId, amount));
      // blockchain.mine();
      // TODO: Finish
      res.send(JSON.stringify({ status: 'success' }));
    }
  });
});

app.listen(PORT, () => console.log(`Running Blockchain API on port ${PORT}`));
