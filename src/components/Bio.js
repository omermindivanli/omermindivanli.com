import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// import profilePic from '../../static/img/profile-pic.jpg'
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
          src="https://pbs.twimg.com/profile_images/992900395478462464/VuicS_fr_400x400.jpg"
          alt={`Ömer Mindivanli`}
          style={{
            marginRight: rhythm(1 / 2),
            width: rhythm(4.5),
            height: rhythm(4.5),
          }}
        />
        <p>
          Written by <strong>Ömer Mindivanli</strong> who is a JavaScript
          Developer, lives and works in Stockholm building Web Apps with mostly
          React.
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
