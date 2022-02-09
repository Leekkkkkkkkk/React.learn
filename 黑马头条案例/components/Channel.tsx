import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActive, setChannel } from '../store/actions/channels'
function Channel() {
  const dispatch = useDispatch()
  const { list, active }: any = useSelector<any>((state) => state.channels)

  useEffect(() => {
    dispatch(setChannel())
  }, [])
  return (
    <ul className="catagtory">
      {list.map((item: any) => {
        return (
          <li
            key={item.id}
            onClick={() => dispatch(setActive(item.id))}
            className={active === item.id ? 'select' : ''}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  )
}
export default Channel
