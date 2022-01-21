import { useEffect, useState } from 'react'

const App = () => {
  const [count, setCoun] = useState(0)
  useEffect(() => {
    document.title = '被点击的次数' + count
    console.log(1)
  }, [count])
  return <button onClick={() => setCoun(count + 1)}>点击页面</button>
}

export default App
