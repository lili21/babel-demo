import React, { Component } from 'react'

export default function hoc (OriginComponent) {
  return class HOC extends Component {
    componentDidMount () {
      console.log('just for fun')
    }
    render() {
      return <OriginComponent {...this.props} />
    }
  }
}
