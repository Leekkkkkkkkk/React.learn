import { Component, ReactNode } from 'react'

class App extends Component {
  state = {
    user: {
      name: 'jack',
      age: 18,
    },
    list: ['电视', '手机'],
  }
  editNmae = () => {
    this.setState({
      user: {
        ...this.state.user,
        name: 'zs',
      },
    })
  }
  addGoods = (params) => {
    this.setState({
      list: [...this.state.list, '相机'],
    })
  }
  render(): ReactNode {
    const { user, list } = this.state
    return (
      <div>
        <h3>名字是{user.name}</h3>
        <h2>年龄是{user.age}</h2>
        <button onClick={this.editNmae}>修改名字</button>
        <button>修改年龄</button>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={this.addGoods}>添加科技产品</button>
      </div>
    )
  }
}

export default App
