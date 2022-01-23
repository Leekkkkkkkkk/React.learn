const initState = { count: 1 }

const reducer = (state = initState, { type, payloay }: any) => {
  switch (type) {
    case 'ADD_COUNT':
      return { ...state, count: state.count + 1 }
    case 'SUB_COUNT':
      return { ...state, count: state.count - 1 }
    case 'ADDN_COUNT': {
      return { ...state, count: state.count + payloay }
    }
    default:
      return state
  }
}
export default reducer
