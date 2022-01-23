import React, { useRef, forwardRef } from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1>类组件</h1>
      </div>
    )
  }
}

const Demo2 = forwardRef((props, ref) => {
  const hRef = useRef(null)
  return (
    <div ref={ref}>
      <h1 ref={hRef}>函数组件</h1>
      <h2 ref={hRef}>函数组件</h2>
      <button onClick={() => console.log(hRef)}>获取ref</button>
    </div>
  )
})

const App = () => {
  const demoRef = useRef(null)
  const demo2Ref = useRef(null)
  return (
    <div>
      <h1>ref的使用</h1>
      {/* 类组件 */}
      <Demo ref={demoRef} />

      {/* 函数组件 */}
      <Demo2 ref={demo2Ref} />
      <button onClick={() => console.log(demo2Ref)}>获取</button>
    </div>
  )
}

export default App
