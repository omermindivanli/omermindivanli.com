import React from 'react'
import { rhythm } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import styled, { css } from 'react-emotion'

import { Route, Router, Link } from 'react-router'

class Github extends React.Component {
  render() {
    const Container = styled('div')`
      .main-header {
        background-color: lightgray;
        color: #fff;
        overflow: hidden;
        padding: 0.5rem;
      }

      .main-header h1 {
        line-height: 1;
        margin: 0;
        font-weight: 400;
      }

      .main-header a {
        color: white;
        text-decoration: none;
      }

      .main-content {
        padding: 0.5rem;
      }

      .search-page {
        text-align: center;
      }

      .search-page__input {
        border: 1px solid black;
        padding: 0.2em;
        margin-right: 1em;
        font-size: 20px;
      }
      .search-page__button {
        border: 1px solid black;
        background-color: #fff;
        font-size: 20px;
      }

      .user-info {
        display: flex;
        flex-wrap: wrap;
      }

      .user-info__avatar {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 1em;
        float: left;
      }

      .user-info__text {
        text-decoration: none;
        flex: 1;
      }

      .user-info__title {
        font-size: 20px;
      }

      .user-info__title,
      .user-info__bio {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .user-info__stats {
        list-style: none;
        padding: 0;
        flex: 1;
        display: flex;
      }

      .user-info__stats a {
        color: #000;
        text-decoration: none;
        text-transform: lowercase;
        font-variant: small-caps;
        text-align: center;
      }

      .user-info__stat {
        flex: 1;
      }

      .user-info__stat p {
        margin: 0;
        white-space: nowrap;
      }
    `
    return (
      <Container>
        <div className="main-app">
          <header className="main-header" />
          <h1>{/* <Link to="/">React GitHub</Link> */}</h1>
          <main className="main-content">{this.props.children}</main>
        </div>
        {/* <Route path="/" component={Github} /> */}
      </Container>
    )
  }
}

export default Github
