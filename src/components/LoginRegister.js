import React from 'react'
import { css } from 'emotion'

const LoginRegister = () => (
  <div className={div}>
    <ul>
      <li className={className}>
        <a disabled="disabled" className={link} href="/signin">
          <em>Sign in</em>
        </a>
      </li>
      <li className={className}>
        <a disabled="disabled" className={link} href="/signup">
          <em>Sign up</em>
        </a>
      </li>
      <li className={className}>
        <a className={enabledLink} href="/jsexp">
          <em>Experiences</em>
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
  color: red;
`
const enabledLink = css`
  font-size: 20px;
  color: #1ba0d7;
`
const div = css`
  margin-top: 0;
`

export default LoginRegister
