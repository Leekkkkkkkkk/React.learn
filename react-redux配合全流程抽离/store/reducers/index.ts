import { combineReducers } from 'redux'
import count from './count'
import user from './user'
const reducer = combineReducers({
  count,
  user,
})
export default reducer
