import { createStore } from 'redux'
const initState = { count: 1 }
const store = createStore((state = initState) => {
  return state
})

export default store
