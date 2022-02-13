import React from 'react'
import { useHistory } from 'react-router-dom'
import { RouteState } from '../types/router-types'

const Login = () => {
  const history = useHistory<RouteState>()

  return (
    <div>
      <button
        onClick={() => {
          history.push({ pathname: '/home', state: { name: 'zs', id: 1 } })
        }}
      >
        跳
      </button>
    </div>
  )
}

export default Login
