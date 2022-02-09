import { SET_NEWS } from '../actionType/news'

const initState = {
  news: [],
}
const newList = (state = initState, { type, payload }: any) => {
  switch (type) {
    case SET_NEWS:
      return { ...state, news: payload }
    default:
      return state
  }
}
export default newList
