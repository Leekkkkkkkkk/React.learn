import { ADD_COUNT } from '../actiontype/count'

const count = (state = 0, { type, payload }: any) => {
  switch (type) {
    case ADD_COUNT:
      return state + 1
    default:
      return state
  }
}
export default count
