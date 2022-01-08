import React from 'react'
import ReactDom from 'react-dom'
import classNames from 'classnames'
import './index.css'

const isActive = true
const isBlock = true
const className = classNames('button', {
  active: isActive,
  block: isBlock,
})
const element = (
  <div>
    <button className={className}>按钮</button>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
