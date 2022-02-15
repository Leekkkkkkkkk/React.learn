import { combineReducers } from 'redux'
import channel from './channel'
import { newList } from './newList'
const rootReducer = combineReducers({
  channel,
  newList,
})

export default rootReducer
