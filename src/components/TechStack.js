import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

const myStyle = css`
  color: rebeccapurple;
`

const Container = styled('div')``

const TechStack = () => (
  <Container>
    {/* <a href="/interest">Interests:</a> */}
    <p className={myStyle}>
      Linux, VR, Ai, JS, React, CSS-in-JS, Node.js, Back-end dev, Front-end Dev,
      DevOps, AWS, CloudNative Apps, Security, Web Techs, Entrepreneurship,
      Kubernetes, Docker, CI/CD, IOT, OpenSource, GoLang, Sharing Information
      and Finally Love Bootstrap :)
    </p>
  </Container>
)

export default TechStack
