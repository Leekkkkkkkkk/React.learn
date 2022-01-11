import { Component, createRef } from 'react'
class App extends Component {
  // 定义状态(数据)的
  mobile = createRef<HTMLInputElement>()
  onSubmit = (params) => {
    console.log(this.mobile.current.value)
  }
  render() {
    return (
      <div>
        <div>
          <input ref={this.mobile} type="text" placeholder="请输入手机号" />
        </div>
        <div>
          <input type="checkbox" id="agree" placeholder="请输入手机号" />
          <label htmlFor="agree">同意用户协议和隐私条款</label>
        </div>
        <button onClick={this.onSubmit}>获取数据</button>
      </div>
    )
  }
}
export default App
