import React from 'react'

import { injectGlobal } from 'emotion'

injectGlobal`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
`

const globalCss = () => <p />

export default globalCss
