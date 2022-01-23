import { useEffect, useState } from 'react'
import GoodsItem from './components/GoodsItem'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
import { arr } from './data'
const App = () => {
  const [list, setList] = useState(arr)
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  const updateState = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, goods_state: !item.goods_state } : item
      )
    )
  }
  const updateAll = (isCheckAll: boolean) => {
    setList(list.map((item) => ({ ...item, goods_state: !isCheckAll })))
  }
  return (
    <div>
      <MyHeader />
      <MyFooter list={list} updateAll={updateAll} />
      {list.map((item) => {
        return <GoodsItem key={item.id} row={item} updateState={updateState} />
      })}
    </div>
  )
}

export default App
