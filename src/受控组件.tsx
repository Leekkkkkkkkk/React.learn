import React, { Component } from 'react'

export default class App extends Component {
  state = {
    value: '',
    agree: true,
  }
  changMobile = (e: { target: { value: string | number } }) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value,
    })
  }
  changAgree = (e: { target: { checked: boolean } }) => {
    this.setState({
      agree: e.target.checked,
    })
  }
  render() {
    const { value, agree } = this.state
    return (
      <div>
        <div>
          <input
            value={value}
            onChange={this.changMobile}
            type="text"
            placeholder="请输入手机号"
          />
        </div>
        <div>
          <input
            checked={agree}
            onChange={this.changAgree}
            type="checkbox"
            id="agree"
            placeholder="请输入手机号"
          />
          <label htmlFor="agree">同意用户协议和隐私条款</label>
        </div>
      </div>
    )
  }
}
