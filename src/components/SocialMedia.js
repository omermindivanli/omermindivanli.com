  import React from 'react'

  // Import typefaces
  import 'typeface-montserrat'
  import 'typeface-merriweather'

  import styled from "styled-components";
  
  import { rhythm } from '../utils/typography'

  export default class SocialMedia extends React.Component {
    constructor(props) {
      super(props)
    }
    example() {
        let x = (new Date()).toLocaleDateString();
        console.log(typeof x + ' ' + x);
    }
    render() {
      const userDatas = {
        name: 'Ömer',
        surname: 'Mindivanli',
        avatar: 'https://avatars0.githubusercontent.com/u/24420843?s=40&v=4',
      }
      const Button = styled.button`
        border-radius: 1px;
        padding: 0.25em 2em;
        margin: 0 1em;
        background: pink;
        color: palevioletred;
        border: 2px solid red;
      `;
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
      return (
        <div style={styles.div}>
          <Button onClick={this.example}>Button</Button>
          <img src={userDatas.avatar} />
          <ul>
            <li style={styles.li}>{userDatas.name}</li>
            <li
              style={{
                backgroundColor: 'red',
              }}
            >
              {userDatas.surname}
            </li>
          </ul>
          <p></p>
        </div>
      )
    }
  }
