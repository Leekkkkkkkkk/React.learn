import React, { Component } from 'react'
import WithMouse from './components/WithMouse'
import ShowPostion from './components/ShowPostion'
import ImgPostion from './components/ImgPostion'
const ShowMouse = WithMouse(ShowPostion)
const ImgMouse = WithMouse(ImgPostion)
export default class App extends Component {
  render() {
    return (
      <div>
        <ShowMouse />
        <ImgMouse />
      </div>
    )
  }
}
