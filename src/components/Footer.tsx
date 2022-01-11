import React, { Component, MouseEvent } from 'react'
type Props = {
  activeClick: (arg0: string) => void
  active: string
  Todo: Array<Itodo>
}
type Itodo = {
  id: number
  title: string
  done: boolean
}
const Footer = ({ activeClick, active, Todo }: Props) => {
  //   全部
  const allClick = (e: MouseEvent) => {
    e.preventDefault()
    activeClick('All')
  }
  //   进行中
  const ActiveClick = (e: MouseEvent) => {
    e.preventDefault()
    activeClick('Active')
  }
  //   已完成
  const completedClick = (e: MouseEvent) => {
    e.preventDefault()
    activeClick('Completed')
  }
  const length = () => {
    return Todo.filter((item) => item.done !== true).length
  }
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{length()}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={active === 'All' ? 'selected' : ''}
              href="#/"
              onClick={allClick}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              className={active === 'Active' ? 'selected' : ''}
              onClick={ActiveClick}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              className={active === 'Completed' ? 'selected' : ''}
              onClick={completedClick}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  )
}
export default Footer
