import { ToDoAction } from '../../types/todos'

const initState = {
  list: [
    {
      id: 1,
      name: '吃饭',
      done: false,
    },
    {
      id: 2,
      name: '睡觉',
      done: true,
    },
  ],
}
// { type, payload }
const todos = (state = initState, actions: ToDoAction) => {
  switch (actions.type) {
    case 'DEL_TODO':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== actions.payload),
      }
    case 'ADD_TODO':
      return {
        ...state,
        list: [...state.list, { id: Math.random(), name: actions.payload, done: false }],
      }
    case 'UPDATE_TODO':
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === actions.payload) {
            return { ...item, done: !item.done }
          }
          return item
        }),
      }
    default:
      return state
  }
}
export default todos
