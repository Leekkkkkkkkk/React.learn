import { combineReducers } from 'redux'
import channels from './channel'
import newList from './newList'
const reducer = combineReducers({
  channels,
  newList,
})

export default reducer
