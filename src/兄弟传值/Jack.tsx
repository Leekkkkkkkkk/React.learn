import React, { Component } from 'react'

type Iprops = {
  setMsg: (msg: string) => void
}
export default class Jack extends Component<Iprops> {
  render() {
    return (
      <div>
        Jack:{''}
        <button onClick={() => this.props.setMsg('在想你')}>告诉Roes:</button>
      </div>
    )
  }
}
