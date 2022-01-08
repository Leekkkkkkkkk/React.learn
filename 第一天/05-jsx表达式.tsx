import React from 'react'
import ReactDom from 'react-dom'

const data = {
  name: 'tom',
  age: 16,
  count: 10,
}

const data2 = {
  name: 'jerry',
  age: 16,
  count: 10,
}

const up = (str: string) => str.toLocaleUpperCase()

const list = (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
)

const element = (
  <>
    {/* 数据渲染 */}
    <h1>姓名: {data.name}</h1>
    {/* 三元表达式 */}
    <h1>
      年龄: {data.age} <span>成年:</span>
      {data.age > 18 ? '是' : '否'}
    </h1>
    {/* 数据运算 */}
    <h1>数量: {data.count * 100}</h1>
    {/* 方法的使用 */}
    {up(data.name)} 和 {up(data2.name)}
    {/* jsx 当作表达式 */}
    {list}
  </>
)

ReactDom.render(element, document.getElementById('root'))
