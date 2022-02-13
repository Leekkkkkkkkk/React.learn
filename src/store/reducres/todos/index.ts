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
const todos = (state = initState, action: ToDoAction) => {
  switch (action.type) {
    case 'DEL_TODO':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      }
    case 'ADD_TODO':
      return {
        ...state,
        list: [...state.list, { id: Math.random(), name: action.payload, done: false }],
      }
    default:
      return state
  }
}
export default todos
