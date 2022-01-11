import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h1>父组件</h1>
        <Child />
      </div>
    )
  }
}
