import {
  ADD_ITEM,
  CHANG_DONE,
  CHECKED_ALL,
  CLEAR_DONE,
  DEL_DONE,
  UPDATE_NAME,
} from '../actionsType/todoType'

interface initType {
  id: number
  name: string
  done: boolean
}
const initState: Array<initType> = [
  { id: 1, name: '干饭', done: false },
  { id: 2, name: '学习', done: true },
  { id: 3, name: '休息', done: false },
]
const todos = (state = initState, { type, payload }: any) => {
  switch (type) {
    case CHANG_DONE:
      return state.map((item) => {
        if (item.id === payload) {
          return { ...item, done: !item.done }
        }
        return item
      })
    case DEL_DONE:
      return state.filter((item) => item.id !== payload)
    case ADD_ITEM:
      return [payload, ...state]
    case CHECKED_ALL:
      return state.map((item) => {
        return { ...item, done: !payload }
      })
    case UPDATE_NAME:
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, name: payload.name }
        }
        return item
      })
    case CLEAR_DONE:
      return state.filter((item) => item.done !== true)
    default:
      return state
  }
}
export default todos
