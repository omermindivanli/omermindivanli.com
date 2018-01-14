import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-div">
        <p className="footer-p">
          Copyrigth 2017 // Created by
          <a className="footer-a" href="http://github.com/mndvn">
            -Ömer Mindivanli
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
