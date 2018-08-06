import React from 'react'

import { injectGlobal } from 'emotion'

injectGlobal`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
a{
  box-shadow: 0 0 0 0 currentColor;
  text-decoration: underline
}
`

const globalCss = () => <p />

export default globalCss
