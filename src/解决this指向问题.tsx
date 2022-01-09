import React, { MouseEvent } from 'react'
class App extends React.Component {
  state = {
    money: 1000,
  }
  //   handleClick = (e: MouseEvent) => {
  //     e.preventDefault()
  //     const { money } = this.state
  //     this.setState({ money: money + 10 })
  //   }
  handleClick(e: MouseEvent) {
    e.preventDefault()
    const { money } = this.state
    this.setState({ money: money + 10 })
  }
  render(): React.ReactNode {
    const { money } = this.state
    return (
      <div>
        <h6>钱包{money}</h6>
        <button
          //   onClick={(e) => {
          //     this.handleClick(e)
          //   }}
          onClick={this.handleClick.bind(this)}
        >
          分享领红包
        </button>
      </div>
    )
  }
}

export default App
