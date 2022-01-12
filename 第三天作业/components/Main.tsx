import { SetStateAction, useRef, useState, createRef } from 'react'
import clssnames from 'classnames'
type Itodo = {
  id: number
  title: string
  done: boolean
}
type vie = {
  Todo: Array<Itodo>
  editTrue: () => void
  editDele: (id: number) => void
  choiceTrue: (id: number) => void
  active: string
  addEdit: (content: string, id: number) => void
}
const Main = ({
  Todo,
  editTrue,
  editDele,
  choiceTrue,
  active,
  addEdit,
}: vie) => {
  const [id, setID] = useState<number | null>()
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  // const inputRef = createRef<HTMLInputElement>()
  //全选
  const editClick = () => {
    editTrue()
  }
  //删除
  const editDelete = (id: number) => {
    editDele(id)
  }
  //全选
  const editChange = (id: number) => {
    choiceTrue(id)
  }

  let newTodo = [...Todo]
  if (active === 'All') {
    newTodo
  } else if (active === 'Active') {
    newTodo = newTodo.filter((item) => item.done === false)
  } else if (active === 'Completed') {
    newTodo = newTodo.filter((item) => item.done === true)
  }
  //获取修改表单框的值
  const onEdit = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }
  //双击
  const editDouble = (id: number, content: string) => {
    setID(id)
    setValue(content)
    setTimeout(() => {
      inputRef.current?.focus()
    })
  }
  const editBlur = (id: number) => {
    setID(null)
    addEdit(value, id)
  }
  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={editClick}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {newTodo.map((item: Itodo) => {
            return (
              <li
                className={clssnames({
                  completed: item.done,
                  editing: item.id === id,
                })}
                key={item.id}
                onDoubleClick={() => editDouble(item.id, item.title)}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onChange={() => editChange(item.id)}
                    checked={item.done}
                  />
                  <label>{item.title}</label>
                  <button
                    className="destroy"
                    onClick={() => editDelete(item.id)}
                  ></button>
                </div>
                {id === item.id ? (
                  <input
                    className="edit"
                    value={value}
                    onChange={onEdit}
                    // autoFocus
                    ref={inputRef}
                    onBlur={() => editBlur(item.id)}
                  />
                ) : null}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
export default Main
