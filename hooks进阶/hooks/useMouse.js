import { useState, useEffect } from 'react'
const useMouse = () => {
  // 定义记录移动坐标
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    // 给window绑定鼠标移动事件
    window.addEventListener('mousemove', (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    })
  }, [])
  return position
}

export default useMouse
