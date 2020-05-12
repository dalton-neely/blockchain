import React from 'react';
import { Link } from 'react-router-dom';
import { APPLICATION_NAME } from './config';

const Header = () => (
  <div id={'header'}>
    <h1>{APPLICATION_NAME.toUpperCase()}</h1>
    <nav id={'nav'}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/balance">Balance</Link></li>
      </ul>
    </nav>
  </div>
);

export default Header;
