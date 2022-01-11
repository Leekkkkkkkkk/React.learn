import React, { Component } from 'react'
interface Irow {
  key: number | undefined
  row: {
    id: number
    title: string
    publisher: string
    like_count: number
  }
}
export default class Child extends Component<Irow> {
  render() {
    const { row } = this.props
    console.log(this.props)
    return (
      <div className="child">
        <h3>{row.title}</h3>
        <div className="detail">
          <span>{row.publisher}</span>
          <span>{row.like_count}点赞</span>
        </div>
      </div>
    )
  }
}
