import React, { Component } from 'react';
import photo from '../../Assests/header.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <img className="col-5 img-fluid float-right" src={photo} alt="Ömer Mindivanli" />
        <p className="">
          Hi Everyone! I am Ömer Mindivanli, 29 years old and from Turkey. I am a junior and curious
          web developer. I am really more into cutting-edge web technologies to create a
          highly-preferable User Experience. For a long time, I have fallin love with JavaScript. I
          cannot get away from it :).
        </p>
        <p className="">
          I work as freelance in Stockholm along one and years. In Portfolio part of my website, You
          can find some of the projects of me.
        </p>
      </div>
    );
  }
}

export default Home;
