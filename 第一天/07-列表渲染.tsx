import React from 'react'
import ReactDom from 'react-dom'
const list = ['小沈阳', '刘能', '赵四', '谢广坤']
// const list2 = [<li>小沈阳</li>, <li>刘能</li>, <li>赵四</li>, <li>谢广坤</li>]
// console.log(list2)
const lis = list.map((item) => <li key={item}>{item}</li>)
const ulEl = <ul>{lis}</ul>
const element = <div>{ulEl}</div>

ReactDom.render(element, document.getElementById('root'))
