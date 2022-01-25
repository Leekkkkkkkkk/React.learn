import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from './store/actions/count'
const App = () => {
  const { count }: any = useSelector((state) => state)
  console.log(count)
  const dispatch = useDispatch()
  const addcoun = () => {
    dispatch(addCount())
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={addcoun}>++</button>
    </div>
  )
}

export default App
