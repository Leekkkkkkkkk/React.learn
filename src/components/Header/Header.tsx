import React, { Component } from 'react'

interface List {
  title: string
  list: Array<string>
}
export default class Header extends Component {
  state: List = {
    title: '数码产品',
    list: ['相机', '手机', '电脑'],
  }
  render() {
    const { title, list } = this.state
    return (
      <>
        <h1>{title}</h1>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}
