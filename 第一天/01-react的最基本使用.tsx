import React from 'react'
import ReactDom from 'react-dom'

// <h1 id="myh1">hello react</h1>
// 参数1: 标签名
// 参数2: 属性的集合
const element = React.createElement('h1', { id: 'myh1' }, 'hello react')
// console.log(element)

// 参数1: 渲染的react元素
// 参数2: 渲染的指定位置(dom元素)
ReactDom.render(element, document.getElementById('root'))
