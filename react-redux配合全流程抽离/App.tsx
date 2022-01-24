import React from 'react'
import Add from './components/Add'
import Sub from './components/Sub'
import { useSelector } from 'react-redux'
const App = () => {
  const { count }: any = useSelector<any>((state) => state.count)

  return (
    <div>
      <Add />
      数量{count}
      <Sub />
    </div>
  )
}

export default App
