import { useEffect, useState } from 'react'
import axios from 'axios'
type List = { name: string; id: number }[]
const App = () => {
  const [list, setList] = useState<List>([])
  useEffect(() => {
    const getList = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      setList(res.data.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
