import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    money: 100000,
  }
  subMoney = (moeny: number) => {
    this.setState({
      money: this.state.money - moeny,
    })
  }
  render() {
    return (
      <div>
        <div>父组件的钱:{this.state.money}</div>
        <button
          onClick={() => {
            this.setState({
              money: this.state.money + 10000,
            })
          }}
        >
          点击赚钱
        </button>
        <p>-------------------------</p>
        <Child moeny={this.state.money} subMoney={this.subMoney} />
      </div>
    )
  }
}
