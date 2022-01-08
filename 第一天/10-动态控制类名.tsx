import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const isActive = false
const isBlock = true
// 数组添加类名
// const element = (
//   <div>
//     <button className={['button', isActive ? 'active' : ''].join(' ')}>
//       按钮
//     </button>
//   </div>
// )
// 类名对象 key: 类名 value: 布尔值
const classObject: any = {
  button: true,
  active: isActive,
  block: isBlock,
}
// 根据对象['button', 'active', 'block'] ['button', 'active'] join

// console.log()
const element = (
  <div>
    <button
      className={Object.keys(classObject)
        .filter((item) => classObject[item])
        .join(' ')}
    >
      按钮
    </button>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
