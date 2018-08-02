import React from 'react'
import { css } from 'emotion'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

export default class SocialMedia extends React.Component {
  render() {
    const styles = {
      div: {
        display: 'flex',
        marginBottom: 0,
      },
      ul: {
        backgroundColor: 'red',
      },
      li: {
        textDecoration: 'none',
        display: 'inline',
        paddingLeft: '15px',
      },
    }
    const className = css`
      width: 84px;
      height: 85px;
      margin-left: 10px;
    `
    const anotherClassName = css`
      display: inline;
      padding-left: 15px;
    `
    return (
      <div style={styles.div}>
        <ul>
          <li style={styles.li}>
            <a href="https://twitter.com/MindivanliOmer">
              <img
                className={className}
                src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
              />
            </a>
          </li>
          <li style={styles.li}>
            <a href="https://www.linkedin.com/in/%C3%B6mer-mindivanli-a02b3552/">
              <img
                className={className}
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              />
            </a>
          </li>
          <li className={anotherClassName}>
            <a href="https://github.com/omermindivanli">
              <img
                className={className}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png"
              />
            </a>
          </li>
          <li style={styles.li}>
            <a href="https://medium.com/@omermindivanli">
              <img
                className={className}
                src="http://pluspng.com/img-png/medium-png-meet-more-bridge-startups-1667.png"
              />
            </a>
          </li>
          <li style={styles.li}>
            <a href="https://gitlab.com/omermindivanli">
              <img
                className={className}
                src="https://png.icons8.com/color/1600/gitlab.png"
              />
            </a>
          </li>
          <li style={styles.li}>
            <a href="https://www.instagram.com/mindivanli/">
              <img
                className={className}
                src={
                  'https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png'
                }
              />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
