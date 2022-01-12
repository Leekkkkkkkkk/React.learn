import React, { Component } from 'react'
import Navbar from './components/Navbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <span>wowowow</span>
        </Navbar>
        <Navbar>
          <p>我的</p>
        </Navbar>
        <Navbar>
          <div>我像风一样自由</div>
        </Navbar>
      </div>
    )
  }
}
