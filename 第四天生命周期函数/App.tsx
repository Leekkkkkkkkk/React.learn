import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './index.css'
import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [],
  }
  componentDidMount() {
    this.getTodos()
  }
  getTodos = async () => {
    const res = await axios.get('http://localhost:4000/todos')
    this.setState({
      list: res.data,
    })
  }
  render() {
    const { list } = this.state
    return (
      <section className="todoapp">
        <Header getTodos={this.getTodos} />
        <Main list={list} getTodos={this.getTodos} />
        <Footer />
      </section>
    )
  }
}
