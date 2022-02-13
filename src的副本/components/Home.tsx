import React from 'react'
import { useLocation } from 'react-router-dom'
import { RouteState } from '../types/router-types'

const Home = () => {
  const location = useLocation<RouteState>()
  console.log(location.state.id)
  return <div>Home</div>
}

export default Home
