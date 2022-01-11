import React from 'react'
class App extends React.Component {
  state = {
    money: 1000,
  }
  handleClick = (e: { stopPropagation: () => void }) => {
    console.log(e)
    e.stopPropagation()
    console.log('鼠标被点击')
    const { money } = this.state
    this.setState({ money: money + 10 })
  }
  handleEnter = () => {
    console.log('鼠标移入了')
  }
  handleOutClick = () => {
    console.log('我是父盒子')
  }
  baidu = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('跳转')
  }
  render(): React.ReactNode {
    const { money } = this.state
    return (
      <div>
        <div
          onClick={this.handleOutClick}
          style={{ width: 100, height: 100, backgroundColor: 'pink' }}
        >
          <h6>钱包{money}</h6>
          <button onClick={this.handleClick}>分享领红包</button>
        </div>
        <a onClick={this.baidu} href="http://www.baidu.com">
          进入百度
        </a>
        <div onMouseEnter={this.handleEnter}>鼠标移入</div>
      </div>
    )
  }
}

export default App
