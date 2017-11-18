import React from 'react';
import './Header.css';

const Header = () => (
  <div id="Header" className="container text-center">
    <h1>Ömer Mindivanli</h1>
    <h5>Front-end Developer</h5>
    <a href="mailto:omermindivanli@gmail.com">omermindivanli@gmail.com</a>
    <a href="http://github.com/mndvn">
      <img
        alt="image"
        className="rounded mx-auto"
        width="40px"
        height="40px"
        src="https://image.flaticon.com/icons/png/512/25/25231.png"
      />
    </a>
    <a href="https://www.linkedin.com/in/%C3%B6mer-mindivanli-a02b3552/">
      <img
        alt="image"
        className="rounded mx-auto"
        width="40px"
        height="40px"
        src="https://lh3.googleusercontent.com/dWGBdDzI8mxlZqXT3qBt4eWmCaWLq-OXfZYea1hu6ODmMj1cLIeQak6Gsecn4zJoflE-"
      />
    </a>
    <a href="https://www.facebook.com/omer.mindivanli">
      <img
        alt="image"
        className="rounded mx-auto"
        width="40px"
        height="40px"
        src="https://www.facebook.com/images/fb_icon_325x325.png"
      />
    </a>
    <a href="https://twitter.com/following?lang=en">
      <img
        alt="image"
        className="rounded mx-auto"
        width="40px"
        height="40px"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png"
      />
    </a>
  </div>
);

export default Header;
