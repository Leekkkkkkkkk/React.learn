const initState = {
  count: 1,
}
const reducer = (state = initState, { type, payload }) => {
  if (type === 'ADD_COUNT') {
    const states = { ...state, count: state.count + 1 }
    return states
  }
  if (type === 'SUB_COUNT') {
    return { ...state, count: state.count - payload }
  }
  return state
}
export default reducer
