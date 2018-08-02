import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Experiences extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(0.5),
        }}
      >
        <h2>My Future Goals</h2>
        <ul>
          <li>Learning Swedish</li>
          <li>Improving my JS Knowledge</li>
          <li>Developing my DevOps Experience</li>
          <li>Trying to learn some management stuffs</li>
          <li>Learning SAAS Business Model</li>
        </ul>
        <p>
          <strong>NOTE</strong>:{' '}
          <em>
            I thought my goals should be open source. That's why I wrote them
            here.
          </em>
        </p>
        <a href="/">Go Back...</a>
      </div>
    )
  }
}

export default Experiences
