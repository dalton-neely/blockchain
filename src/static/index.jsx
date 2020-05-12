import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Balance from './Balance.jsx';
import './index.sass';

const Home = () => (
  <div>
    <h1>Welcome to the Blockchain Application</h1>
    <ul>
      <li>
        <Link to="/balance">Balance</Link>
      </li>
    </ul>
  </div>
);

const App = () => (
    <BrowserRouter>
    <Switch>
      <Route path='/balance'>
        <Balance />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
