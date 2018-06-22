import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import styled, { css } from 'react-emotion'

const myStyle = css`
  color: rebeccapurple;
`

const Container = styled('div')`
  background: lightgreen;
`

const TechStack = () => (
  <Container>
    <p className={myStyle}>
      <em>Website's Technology:</em> React/Gatsby/Travis/Netlify
    </p>
  </Container>
)

export default TechStack
