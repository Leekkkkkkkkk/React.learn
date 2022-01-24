import React from 'react'
import store from '../store'
import { subCount } from '../store/actions'
import { useDispatch } from 'react-redux'

const Sub = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(subCount(4))}>减</button>
    </div>
  )
}

export default Sub
