import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FutureGoals from '../components/FutureGoals'
import Experiences from '../components/Experiences'
import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    let secondPath = `/jsexp`
    let thirdPath = `/futureGoals`

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <div>
          <Navbar />
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                fontSize: '40px',
                boxShadow: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              Ömer Mindivanli
            </Link>
          </h1>
        </div>
      )
    } else if (location.pathname === secondPath) {
      return (
        <Container
          style={{
            maxWidth: rhythm(27),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Experiences />
          <Footer />
        </Container>
      )
    } else if (location.pathname === thirdPath) {
      return (
        <Container
          style={{
            maxWidth: rhythm(27),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <FutureGoals />
          <Footer />
        </Container>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Blog
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(27),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
