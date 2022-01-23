import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Child = () => {
  const value = useContext(ThemeContext)
  return (
    <div>
      <button style={{ background: value }}>按钮</button>
      子组件
      <p style={{ color: value }}>组件</p>
    </div>
  )
}

export default Child
