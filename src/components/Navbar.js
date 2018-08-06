import React from 'react'
import { css } from 'emotion'

const Navbar = () => (
  <div className={div}>
    <ul>
      {/* <li className={className}>
        <a disabled="disabled" className={link} href="/signin">
          <em>Sign in</em>
        </a>
      </li>
      <li className={className}>
        <a disabled="disabled" className={link} href="/signup">
          <em>Sign up</em>
        </a>
      </li> */}
      <li className={className}>
        <a className={enabledLink} href="/jsexp">
          <em>JS Experiences</em>
        </a>
      </li>
      <li className={className}>
        <a className={enabledLink} href="/futureGoals">
          <em>Future Goals</em>
        </a>
      </li>
       <li className={className}>
        <a className={enabledLink} href="/githubProjects">
          <em>Github Projects</em>
        </a>
      </li>
    </ul>
  </div>
)

const className = css`
  text-decoration: none;
  display: inline;
  padding-right: 20px;
`
const link = css`
  font-size: 20px;
  pointer-events: none;
  color: #c4c2c2;
`

const enabledLink = css`
  font-size: 20px;
  color: #1ba0d7;
`
const div = css`
  margin-top: 0;
`

export default Navbar
