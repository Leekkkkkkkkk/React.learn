import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './index.css'
import { Todo } from './Todo'
class App extends Component {
  state = {
    Todo,
    active: 'All',
  }
  //添加
  addTodo = (title: string) => {
    this.setState({
      Todo: [
        {
          id: Math.random(),
          title,
          done: false,
        },
        ...this.state.Todo,
      ],
    })
  }
  //全选为true
  editTrue = () => {
    const itemTrue = this.state.Todo.every((item) => item.done)
    this.setState({
      Todo: this.state.Todo.map((item) => {
        return { ...item, done: !itemTrue }
      }),
    })
  }
  //删除
  editDele = (id: number) => {
    this.setState({
      Todo: this.state.Todo.filter((item) => item.id !== id),
    })
  }
  //选中的为true
  choiceTrue = (id: number) => {
    this.setState({
      Todo: this.state.Todo.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done }
        }
        return item
      }),
      length: Todo.filter((item) => item.done === false).length,
    })
  }
  //选中高亮
  activeClick = (value: string) => {
    this.setState({
      active: value,
    })
  }
  //修改当前项
  addEdit = (value: string, id: number) => {
    this.setState({
      Todo: this.state.Todo.map((item) => {
        if (item.id === id) {
          return { ...item, title: value }
        } else {
          return item
        }
      }),
    })
  }
  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <Main
          Todo={this.state.Todo}
          editTrue={this.editTrue}
          editDele={this.editDele}
          choiceTrue={this.choiceTrue}
          active={this.state.active}
          addEdit={this.addEdit}
        />
        <Footer
          Todo={this.state.Todo}
          active={this.state.active}
          activeClick={this.activeClick}
        />
      </section>
    )
  }
}

export default App
