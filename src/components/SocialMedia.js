import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { fontFace, injectGlobal } from 'emotion'
import styled from 'react-emotion'

import { rhythm } from '../utils/typography'

export default class SocialMedia extends React.Component {
  render() {
    const userDatas = {
      name: 'Ömer',
      surname: 'Mindivanli',
      avatar: 'https://avatars0.githubusercontent.com/u/24420843?s=40&v=4',
    }
    const styles = {
      div: {
        display: 'flex',
        marginBottom: rhythm(0.5),
      },
      ul: {
        backgroundColor: 'red',
      },
      li: {
        display: 'inline',
        paddingLeft: '15px',
      },
    }
    injectGlobal`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `
    return (
      <div style={styles.div}>
        <ul>
          <li style={styles.li}>
            <a href="https://twitter.com/MindivanliOmer">
              <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" />
            </a>
          </li>
          <li style={styles.li}>
            <a href="https://www.linkedin.com/in/%C3%B6mer-mindivanli-a02b3552/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
            </a>
          </li>
          <li style={styles.li}>
            <a href="https://github.com/omermindivanli">
              <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
