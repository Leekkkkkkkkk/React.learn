import { useRef } from 'react'

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const getRef = () => {
    console.log(inputRef.current?.value)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getRef}>``</button>
    </div>
  )
}

export default App
