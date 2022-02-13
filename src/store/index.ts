import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducres'

const store = createStore(rootReducer, composeWithDevTools())
export type RootState = ReturnType<typeof store.getState>
export default store
