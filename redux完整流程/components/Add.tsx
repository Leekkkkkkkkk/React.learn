import React from 'react'
import store from '../store'
import { addCount, addnCount } from '../store/active'
const Add = () => {
  return (
    <div>
      <button onClick={() => store.dispatch(addCount())}>加</button>
      <button onClick={() => store.dispatch(addnCount(3))}>加N</button>
    </div>
  )
}

export default Add
