import { SET_AVTIVE } from '../actionsType/filter'

const initState = {
  active: 'all',
}
const filter = (state = initState, { type, payload }: any) => {
  switch (type) {
    case SET_AVTIVE:
      return { ...state, active: payload }
    default:
      return state
  }
}
export default filter
