import { useState } from 'react'
import GoodsItem from './components/GoodsItem'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
import { arr } from './data'
const App = () => {
  const [list, setList] = useState(arr)
  const updateState = (id: number) => {
    console.log('更新状态', id)
    setList(
      list.map((item) =>
        item.id === id ? { ...item, goods_state: !item.goods_state } : item
      )
    )
  }
  return (
    <div>
      <MyHeader />
      <MyFooter />
      {list.map((item) => {
        return <GoodsItem key={item.id} row={item} updateState={updateState} />
      })}
    </div>
  )
}

export default App
