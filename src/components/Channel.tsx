import React, { useEffect } from 'react'
import { getChannel, updateActive } from '../store/actions/channels'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

const Channel = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannel())
  }, [dispatch])
  const { channelList, active } = useSelector((state: RootState) => state.channel)
  const clickActive = (keys: number) => {
    dispatch(updateActive(keys))
  }
  return (
    <ul className="catagtory">
      {channelList.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              clickActive(item.id)
            }}
            className={item.id === active ? 'select' : ''}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Channel
