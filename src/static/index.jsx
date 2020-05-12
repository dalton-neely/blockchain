import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Balance from './Balance.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import './index.sass';

const App = () => (
    <BrowserRouter>
      <Header />
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
