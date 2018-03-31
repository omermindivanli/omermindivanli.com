import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../../static/img/profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(0.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Ömer Mindivanli`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Ömer Mindivanli</strong> who is a JavaScript
          Developer, lives and works in Stockholm building Web Apps with mostly
          React.{' '}
          <a href="https://twitter.com/MindivanliOmer">
            <br />Follow me on Twitter
          </a>
          {'  or  '}
          <a href="mailto:omer.mindivanli@gmail.com">
            omer.mindivanli@gmail.com
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
