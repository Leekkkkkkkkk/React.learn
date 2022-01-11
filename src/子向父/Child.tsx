import React, { Component } from 'react'
interface Imoeny {
  moeny: number
  subMoney: (moeny: number) => void
}
export default class Child extends Component<Imoeny> {
  render() {
    const { subMoney, moeny } = this.props
    return (
      <div>
        {moeny}
        <button onClick={() => subMoney(2000)}>给家人买衣服</button>
        <button onClick={() => subMoney(5000)}>给家人买手机</button>
      </div>
    )
  }
}
