import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div id="Navbar" className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#" className="navbar-brand" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
