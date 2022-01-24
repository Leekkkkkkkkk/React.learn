import React from 'react'
import store from '../store'
import { addCount, addnCount } from '../store/actions'
import { useDispatch } from 'react-redux'
const Add = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(addCount())}>加</button>
      <button onClick={() => dispatch(addnCount(3))}>加NNNN</button>
    </div>
  )
}

export default Add
