import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Thunk from 'redux-thunk'
import rootReducer from './reducres'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)))
export type RootState = ReturnType<typeof store.getState>
export default store
