import { SET_ACTIVE, SET_CHANNELS } from '../actionType/channels'

const initState: any = {
  list: [],
  active: 0,
}
const channel = (state = initState, { type, payload }: any) => {
  switch (type) {
    case SET_CHANNELS:
      return { ...state, list: payload }
    case SET_ACTIVE:
      return { ...state, active: payload }
    default:
      return state
  }
}
export default channel
