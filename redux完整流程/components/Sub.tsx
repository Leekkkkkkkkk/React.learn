import React from 'react'
import store from '../store'
import { subCount } from '../store/active'

const Sub = () => {
  return (
    <div>
      <button onClick={() => store.dispatch(subCount(4))}>减</button>
    </div>
  )
}

export default Sub
