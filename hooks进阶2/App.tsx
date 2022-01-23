import axios from 'axios'
import { useEffect, useState } from 'react'
import GoodsItem from './components/GoodsItem'
import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
import CarContext from './CarContext'
const App = () => {
  const arr = JSON.parse(localStorage.getItem('list') as any)
  const [list, setList] = useState<any>(arr || [])
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  const updateState = (id: number) => {
    setList(
      list.map((item: any) =>
        item.id === id ? { ...item, goods_state: !item.goods_state } : item
      )
    )
  }
  const updateAll = (isCheckAll: boolean) => {
    setList(list.map((item: any) => ({ ...item, goods_state: !isCheckAll })))
  }
  useEffect(() => {
    if (arr) return
    const getList = async () => {
      const res = await axios.get('https://www.escook.cn/api/cart')
      setList(res.data.list)
      console.log(res)
    }
    getList()
  }, [arr])
  const ChangeCount = (id: number, newCount: number) => {
    console.log(newCount)
    setList(
      list.map((item: any) => {
        if (item.id === id) {
          return { ...item, goods_count: newCount }
        } else {
          return item
        }
      })
    )
  }
  return (
    <CarContext.Provider value={{ ChangeCount }}>
      <div>
        <MyHeader />
        <MyFooter list={list} updateAll={updateAll} />
        {list.map((item: any) => {
          return (
            <GoodsItem key={item.id} row={item} updateState={updateState} />
          )
        })}
      </div>
    </CarContext.Provider>
  )
}

export default App
