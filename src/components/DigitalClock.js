import React from 'react'

export default class DigitalClock extends React.Component {
  render() {
    function tick() {
      const time = new Date().toLocaleTimeString()
    }
    setInterval(tick, 1000)
    return <div />
  }
}
