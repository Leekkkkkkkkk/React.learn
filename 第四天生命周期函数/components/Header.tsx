import React, { Component } from 'react'
import axios from 'axios'
type viod = {
  getTodos: () => Promise<void>
}
export default class Header extends Component<viod> {
  state = {
    value: '',
  }
  //受控组件
  editChang = (e: { target: { value: string } }) => {
    this.setState({
      value: e.target.value.trim(),
    })
  }
  //发送
  editKeyUp = async (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      if (this.state.value === '') return alert('请输入任务名称')
      await axios.post('http://localhost:4000/todos', {
        done: false,
        name: this.state.value,
      })
      this.props.getTodos()
      this.setState({
        value: '',
      })
    }
  }
  render() {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <input
            value={this.state.value}
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.editChang}
            onKeyUp={this.editKeyUp}
            autoFocus
          />
        </header>
      </>
    )
  }
}
