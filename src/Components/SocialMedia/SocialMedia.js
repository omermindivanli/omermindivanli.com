import React, { Component } from 'react';
import './SocialMedia.css';

class Life extends Component {
  render() {
    return (
      <div className="container">
        <div className="socialMedia">
          <ul className="list-group">
            <a
              href="https://www.facebook.com/omer.mindivanli/"
              className="btn btn-social-icon btn-facebook"
            >
              <span className="fa fa-facebook fa-2x" />
            </a>
            <a href="https://www.github.com/mndvn/" className="btn btn-social-icon btn-github">
              <span className="fa fa-github fa-2x" />
            </a>
            <a
              href="https://twitter.com/MindivanliOmer"
              className="btn btn-social-icon btn-twitter"
            >
              <span className="fa fa-twitter fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ömer-mindivanli-a02b3552/"
              className="btn btn-social-icon btn-linkedin"
            >
              <span className="fa fa-linkedin fa-2x" />
            </a>
            <a
              href="https://www.instagram.com/xcons_haninge/"
              className="btn btn-social-icon btn-instagram"
            >
              <span className="fa fa-instagram fa-2x" />
            </a>
            <br />
          </ul>
        </div>
      </div>
    );
  }
}

export default Life;
