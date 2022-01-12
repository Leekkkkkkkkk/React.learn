import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'
type Itodo = {
  id: number
  name: string
  done: boolean
}
type vie = {
  list: Array<Itodo>
  getTodos: () => Promise<void>
}

const Main = ({ list, getTodos }: vie) => {
  const editDel = async (id: number) => {
    await axios.delete(`http://localhost:4000/todos/${id}`)
    getTodos()
  }
  const editState = async (e: any, id: number) => {
    await axios.patch(`http://localhost:4000/todos/${id}`, {
      done: e.target.checked,
    })
    getTodos()
  }
  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list.map((item) => {
            return (
              <li
                key={item.id}
                className={classnames({ completed: item.done })}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onClick={(e) => editState(e, item.id)}
                    checked={item.done}
                  />
                  <label>{item.name}</label>
                  <button
                    onClick={() => editDel(item.id)}
                    className="destroy"
                  ></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" />
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Main
