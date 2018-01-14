import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-div">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a className="navbar-a" href="">
              Home
            </a>
          </li>
          <li className="navbar-li">
            <a className="navbar-a" href="">
              Portfolio
            </a>
          </li>
          <li className="navbar-li">
            <a className="navbar-a" href="">
              Thoughts
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
