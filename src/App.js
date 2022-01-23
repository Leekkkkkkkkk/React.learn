import React from 'react'
import store from './store'
import { subCount } from './store/action'
const App = () => {
  console.log(store)
  const { count } = store.getState()
  return (
    <div>
      <button
        onClick={() =>
          store.dispatch({
            type: 'ADD_COUNT',
          })
        }
      >
        +
      </button>
      <button>{count}</button>
      <button
        onClick={() => {
          store.dispatch(subCount(2))
        }}
      >
        -
      </button>
    </div>
  )
}
export default App
