import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    const mail = {
      address: 'omer.mindivanli@gmail.com',
    }
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <a href="mailto:omer.mindivanli@gmail.com">{mail.address}</a>
      </div>
    )
  }
}

export default Footer
