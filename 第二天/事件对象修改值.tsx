import { Component, MouseEvent } from 'react'
class App extends Component {
  // 定义状态(数据)的
  state = {
    money: 1000,
  }
  handleClick = (e: MouseEvent, num: number) => {
    console.log(this.state.money)
    const { money } = this.state
    this.setState({ money: money + num })
    console.log(this.state.money)
  }
  render() {
    const { money } = this.state
    return (
      <div>
        <h6>钱包: {money}</h6>
        <button
          onClick={(e) => {
            this.handleClick(e, 10)
          }}
        >
          分享得红包10元
        </button>
        <button
          onClick={(e) => {
            this.handleClick(e, 5)
          }}
        >
          分享得红包
        </button>
      </div>
    )
  }
}
export default App
