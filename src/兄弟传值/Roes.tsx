import React, { Component } from 'react'

type Iprops = {
  msg: string
}
export default class Roes extends Component<Iprops> {
  render() {
    return <div>Roes:{this.props.msg}</div>
  }
}
