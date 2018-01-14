import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Lines } from 'react-preloading-component';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-yellow rounded header-font">
          <a className="navbar-brand nav-link" href="http://omermindivanli.com">
            Ömer Mindivanli
          </a>
          <div>
            <Lines color="blue" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav mr-auto">
              <Link to="/" className="nav-link active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
              <Link to="/portfolio" className="nav-link active">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </Link>
              <Link to="/software" className="nav-link active">
                <a className="nav-link disabled" href="#">
                  Software
                </a>
              </Link>
              <Link to="/life" className="nav-link dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="dropdown09"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Life
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown09">
                  <a className="dropdown-item" href="#">
                    Opinions
                  </a>
                  <a className="dropdown-item" href="#">
                    Hobbies
                  </a>
                  <a className="dropdown-item" href="#">
                    Family
                  </a>
                </div>
              </Link>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav">
              <li className="nav-link active">Sw</li>
              <li className="nav-link active">Tr</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
