import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import omer from '../../static/img/omer.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    const mail = {
      address: 'omer.mindivanli@gmail.com',
    }
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(0.5),
        }}
      >
        <img
          src={omer}
          alt={`Ömer Mindivanli`}
          style={{
            marginRight: rhythm(5 / 5),
            minWidth: rhythm(8),
            height: rhythm(11.5),
          }}
        />
        <p>
          Written by <strong>Ömer Mindivanli</strong>, who is a JavaScript
          Developer, lives and works in Stockholm. I have fallen love with
          Software Engineering especially the world wide web area after my 20's.
          Although I am a Material Scientist, I chose software development
          career. One of my aim is to create my own SAAS business until 2025. We
          will see what happens. I have a strong DevOps curiosity besides
          JavaScript Stuffs. I mostly work with React.js. As back-end
          technology, I would rather Node.js. Even tough, I have lots of
          projects on my mind, I consider to be calm down before running a
          startup on the early steps of my career. One of my personality is
          getting on well with people. 👩‍💻 👨‍💻
          <a href="https://twitter.com/MindivanliOmer">
            <br />Follow me on Twitter
          </a>
          {'  or  '}
          <a href="mailto:omer.mindivanli@gmail.com">{mail.address}</a>
        </p>
      </div>
    )
  }
}

export default Bio
