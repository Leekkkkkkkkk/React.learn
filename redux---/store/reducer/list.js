import { ADD_COUNT } from '../actionsType/lists'

const initState = {
  count: 1,
}
const lsit = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...state, count: state.count + payload }
    default:
      return state
  }
}
export default lsit
