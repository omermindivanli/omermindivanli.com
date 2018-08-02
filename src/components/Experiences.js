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
        <h2>JavaScript Experiences</h2>
        <ul>
          <li>React</li>
          <li>Redux (Low)</li>
          <li>ES6</li>
          <li>Node.js + Express.js</li>
          <li>HTML and CSS</li>
          <li>CSS-in-JS Emotion</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Amazon Web Services (EC2, RDS) and Digital Ocean</li>
          <li>Git / Github</li>
          <li>Gatsby</li>
          <li>Google Chrome Developer Tools </li>
          <li>Linux / Ubuntu + MacOS / Unix Bash</li>
          <li>Bootstrap and Material UI </li>
          <li>npm & yarn</li>
          <li>Docker</li>
          <li>Next.js</li>
          <li>Webpack</li>
          <li>UI Testing with Jest and Enzyme</li>
          <li>React Native (Low)</li>
          <li>Docker</li>
        </ul>
        <p>
          <strong>NOTE</strong>:{' '}
          <em>I have a theorical and real-world exp on these techs.</em>
        </p>
      </div>
    )
  }
}

export default Experiences
