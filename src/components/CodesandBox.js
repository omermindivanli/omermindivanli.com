import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../../static/img/profile-pic.jpg'
import { rhythm } from '../utils/typography'

export default class CodesandBox extends React.Component {
  render() {
    const mail = {
      address: 'omer.mindivanli@gmail.com',
    }
    const styles = {
      codesandbox: {
        width: '100%',
        minHeight: '600px',
      },
    }
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(0.5),
        }}
      >
        <iframe
          src="https://codesandbox.io/embed/new?codemirror=1"
          style={styles.codesandbox}
        />
      </div>
    )
  }
}
