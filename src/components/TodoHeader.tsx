import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/actions/todos'
const TodoAdd = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const todos: any = useSelector<any>((state) => state.todos)
  const addItem = (e: { keyCode: any }) => {
    if (e.keyCode === 13) {
      if (value.trim() === '') return alert('请输入任务')
      dispatch(
        addTodo({
          id: todos.length + 1,
          name: value,
          done: false,
        })
      )
      setValue('')
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value.trim())}
        onKeyUp={addItem}
      />
    </header>
  )
}

export default TodoAdd
