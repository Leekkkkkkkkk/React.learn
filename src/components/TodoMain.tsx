import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { checkedAlls } from '../store/actions/todos'
import TodoItem from './TodoItem'
const TodoList = () => {
  const { active }: any = useSelector<any>((state) => state.filter)
  const todos: any = useSelector<any>((state) => {
    if (active === 'active') {
      return state.todos.filter((item: any) => !item.done)
    } else if (active === 'completed') {
      return state.todos.filter((item: any) => item.done)
    }
    return state.todos
  })
  const dispatch = useDispatch()
  const checkedAll = todos.every((item: any) => item.done)

  return (
    <section className="main">
      <input
        id="toggle-all"
        checked={checkedAll}
        className="toggle-all"
        type="checkbox"
        onChange={() => dispatch(checkedAlls(checkedAll))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((item: any) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  )
}

export default TodoList
