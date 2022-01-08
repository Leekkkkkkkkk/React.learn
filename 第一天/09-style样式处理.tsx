import React from 'react'
import ReactDom from 'react-dom'

const list = [
  { id: 100, name: 'tom', age: 15 },
  { id: 101, name: 'jack', age: 18 },
  { id: 102, name: 'tony', age: 20 },
]

const ulStyle = {
  fontSize: 15,
  backgroundColor: 'hotpink',
  color: '#fff',
  listStyle: 'none',
}

const element = (
  <div>
    <ul style={ulStyle}>
      {/* 原理是将数据数组 映射了一个 jsx数组 */}
      {list.map((item) => (
        <li style={{ fontSize: '2em' }} key={item.id}>
          123
          <h2>姓名: {item.name}</h2>
          <h2>是否成年: {item.age >= 18 ? '是' : '否'}</h2>
        </li>
      ))}
    </ul>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
