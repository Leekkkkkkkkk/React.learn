import React from 'react'
import ReactDom from 'react-dom'

const element = React.createElement('div', { className: 'list' }, [
  React.createElement('h1', null, '水果'),
  React.createElement('ul', null, [
    React.createElement('li', null, '苹果'),
    React.createElement('li', null, '橘子'),
  ]),
])

// 参数1: 渲染的react元素
// 参数2: 渲染的指定位置(dom元素)
ReactDom.render(element, document.getElementById('root'))
