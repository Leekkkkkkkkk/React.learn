import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Thunk, { ThunkAction } from 'redux-thunk'
import rootReducer from './reducers'
import { ChannelActionType } from './types'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)))
export type RootState = ReturnType<typeof store.getState>
export type RootThunkAction = ThunkAction<void,RootState,unknown,ChannelActionType>
export default store
