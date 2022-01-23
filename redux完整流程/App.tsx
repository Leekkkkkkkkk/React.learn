import React from 'react'
import Add from './components/Add'
import Sub from './components/Sub'
import store from './store'
const App = () => {
  console.log(store.getState())
  const { count } = store.getState() as any
  return (
    <div>
      <Add />
      数量{count}
      <Sub />
    </div>
  )
}

export default App
