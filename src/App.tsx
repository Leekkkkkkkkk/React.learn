import { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { AddTodo, DelTodo, UpdateActionTodo } from './store/actions'
import { useState } from 'react'
import './App.css'
const App = () => {
  const list = useSelector((state: RootState) => state.todos.list)
  const Dispatch = useDispatch()
  const onDel = (keys: number) => {
    Dispatch(DelTodo(keys))
  }
  const [valueName, setValue] = useState('')
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    Dispatch(AddTodo(valueName))
  }
  const changDone = (keys: number) => {
    Dispatch(UpdateActionTodo(keys))
  }
  return (
    <div>
      <input type="text" value={valueName} onChange={onChangeValue} onKeyUp={onAdd} />
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            className={item.done ? 'action' : ''}
            onClick={() => {
              changDone(item.id)
            }}
          >
            {item.name}
            <button
              onClick={() => {
                onDel(item.id)
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
