import React from 'react'
import Fatcher from './components/Fatcher'
import ThemeContext from './context/ThemeContext'

const App = () => {
  const color = 'pink'
  return (
    <ThemeContext.Provider value={color}>
      <div>
        <button style={{ background: color }}>按钮</button>
        app组件: <Fatcher />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
