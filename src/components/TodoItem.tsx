import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeDone, delDone, updateNmae } from '../store/actions/todos'

import calssnames from 'classnames'

const TodoItem = ({ item }: any) => {
  const [currentID, setCurrentID] = useState(null)
  const dispatch = useDispatch()
  const inputRef = useRef<any>(null)
  const [currentName, setCurrentName] = useState('')
  const showEdit = (keys: any) => {
    setCurrentID(keys.id)
    setCurrentName(keys.name)
  }
  const onKey = (e: any) => {
    if (e.keyCode === 27) {
      setCurrentName('')
      setCurrentID(null)
    }
    if (e.keyCode === 13) {
      dispatch(
        updateNmae({
          id: currentID,
          name: currentName,
        })
      )
      setCurrentName('')
      setCurrentID(null)
    }
  }
  useEffect(() => {
    inputRef.current.focus()
  })
  return (
    <li
      className={calssnames({
        completed: item.done,
        editing: item.id === currentID,
      })}
    >
      <div className="view">
        <input
          onChange={() => dispatch(changeDone(item.id))}
          className="toggle"
          checked={item.done}
          type="checkbox"
        />
        <label onDoubleClick={() => showEdit(item)}>{item.name}</label>
        <button
          className="destroy"
          onClick={() => dispatch(delDone(item.id))}
        />
      </div>
      <input
        className="edit"
        ref={inputRef}
        onBlur={() => setCurrentID(null)}
        value={currentName}
        onKeyUp={onKey}
        onChange={(e) => setCurrentName(e.target.value)}
      />
    </li>
  )
}

export default TodoItem
