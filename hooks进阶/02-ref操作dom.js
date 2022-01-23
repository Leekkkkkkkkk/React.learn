import React, { useRef } from 'react'

const App = () => {
  // 创建ref
  const inputRef = useRef(null)
  return (
    <div>
      <h1>ref的使用</h1>
      {/* 引用ref */}
      <input type="text" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>
        获取输入框的值
      </button>
    </div>
  )
}

export default App
