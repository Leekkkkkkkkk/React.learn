import React, { Component } from 'react'

type Iprops = {
  active: string
  setActive: (value: string) => void
  length: number
}
const CommentHeader = ({ active, setActive, length }: Iprops) => {
  return (
    <h3 className="comm-head">
      热门评论<sub>({length})</sub>
      <span
        onClick={() => setActive('default')}
        className={active === 'default' ? 'active' : ''}
      >
        默认
      </span>
      <span
        onClick={() => setActive('time')}
        className={active === 'time' ? 'active' : ''}
      >
        时间
      </span>
    </h3>
  )
}
export default CommentHeader
