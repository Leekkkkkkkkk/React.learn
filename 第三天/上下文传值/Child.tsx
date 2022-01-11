import React, { Component } from 'react'
import { Consumer } from '../App'
type Iprops = {
  money: number
  addMoney: (money: number) => void
}
export default class Child extends Component<Iprops> {
  render() {
    return (
      <div>
        <h1>孙子组件</h1>
        <Consumer>{({ money }) => <div>爷爷的钱{money}</div>}</Consumer>
        <Consumer>
          {({ addMoney }) => (
            <button onClick={() => addMoney(1000)}>给爷爷钱</button>
          )}
        </Consumer>
      </div>
    )
  }
}
