import React, { Component } from 'react'
import HOC from './hoc'

@HOC
export default class App extends Component {
  state = { name: 'Babel' }
  render () {
    return (
      <div className="app">
        <h1>Hello, { this.state.name }</h1>
      </div>
    )
  }
}
