import { useEffect, useState } from 'react'
import imgs from './logo192.png'
const Hhh = () => {
  const [show, setShow] = useState('none')
  useEffect(() => {
    const id = setInterval(() => {
      console.log(1)
      setShow(Math.random() > 0.5 ? 'block' : 'none')
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  return <img src={imgs} alt="" style={{ display: show }} />
}

export default Hhh
