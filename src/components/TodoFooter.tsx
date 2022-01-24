import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../store/actions/filter'
import { clearDone } from '../store/actions/todos'
const TodoFooter = () => {
  const todos: any = useSelector<any>((state) => state.todos)
  const { active }: any = useSelector<any>((state) => state.filter)
  const doneLengt = todos.filter((item: any) => !item.done).length
  const dispatch = useDispatch()
  const arr = ['all', 'active', 'completed']
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{doneLengt}</strong> item left
      </span>
      <ul className="filters">
        {arr.map((item) => {
          return (
            <li onClick={() => dispatch(setActive(item))} key={item}>
              <a href="#/" className={item === active ? 'selected' : ''}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
      <button className="clear-completed" onClick={() => dispatch(clearDone())}>
        Clear completed
      </button>
    </footer>
  )
}

export default TodoFooter
