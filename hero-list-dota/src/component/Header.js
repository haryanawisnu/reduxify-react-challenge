import React from 'react';
import{Link} from 'react-router-dom';

import logo from '../logo.png';
import '../App.css';

class Header extends React.Component {
  render() {
    return (
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>Welcome Dota List Hero</h2>
        </div>
    )
  }
}

export default Header;
