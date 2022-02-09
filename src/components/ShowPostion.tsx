import React, { Component } from 'react'
interface ShowPostionType {
  x: number
  y: number
}
export default class ShowPostion extends Component<ShowPostionType> {
  render() {
    return (
      <div>
        鼠标的坐标:{this.props.x},{this.props.y}
      </div>
    )
  }
}
