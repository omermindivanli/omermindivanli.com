/* Footer Component */
import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="article-div">
        <img className="article-img" src="./Assests/header.jpg" alt="omer-photo" />
        <p className="article-p">
          Hi Everyone! I am Ömer Mindivanli, 29 years old and from Turkey. I am a junior and curious
          web developer. I am really more in cutting-edge web technologies to create a
          highly-preferable User Experience. For a long time, I have fallin love with JavaScript. I
          cannot get away from it :).
        </p>
        <p className="article-p">
          Hi Everyone! I am Ömer Mindivanli, 29 years old and from Turkey. I am a junior and curious
          web developer. I am really more in cutting-edge web technologies to create a
          highly-preferable User Experience. For a long time, I have fallin love with JavaScript. I
          cannot get away from it :).
        </p>
        <div className="social-div">
          <ul className="social-ul">
            <li className="social-li">
              <a className="social-a" href="http://github.com/mndvn">
                a
              </a>
            </li>
            <li className="social-li">
              <a className="social-a" href="http://github.com/mndvn">
                b
              </a>
            </li>
            <li className="social-li">
              <a className="social-a" href="http://github.com/mndvn">
                c
              </a>
            </li>
            <li className="social-li">
              <a className="social-a" href="http://github.com/mndvn">
                d
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
