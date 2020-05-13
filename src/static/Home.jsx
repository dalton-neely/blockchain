import React from 'react';
import { APPLICATION_NAME } from './config';
import Balance from './Balance.jsx';
import Transaction from './Transaction.jsx';

const Home = () => (
  <div className={'main-content'}>
    <h1>Welcome to {APPLICATION_NAME}!</h1>
    <p>The cryptocurrency of pirates.</p>
    <Balance />
    <Transaction />
  </div>
);

export default Home;
