import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)))
export default store
