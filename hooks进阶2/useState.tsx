import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({ name: 'zs', age: 19 })
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(2)
        }}
      >
        加钱
      </button>
      {person.name}
      <button onClick={() => setPerson({ ...person, name: 'ls' })}>
        修改名称
      </button>
    </div>
  )
}

export default App
