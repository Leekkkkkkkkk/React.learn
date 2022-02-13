import { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { AddTodo, DelTodo } from './store/actions'
import { useState } from 'react'
const App = () => {
  const { list } = useSelector((state: RootState) => state.todos)
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
  return (
    <div>
      <input type="text" value={valueName} onChange={onChangeValue} onKeyUp={onAdd} />
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
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
