import React from 'react'
import ReactDom from 'react-dom'

const loading = true

// 三元运算
// const element = (
//   <div>{loading ? <div>正在加载中</div> : <div>加载完毕页面内容</div>}</div>
// )

// const element = (
//   <div>
//     {loading && <div>正在加载中</div>}
//     {!loading && <div>加载完毕页面内容</div>}
//   </div>
// )

// 逻辑运算
// const element = (
//   <div>
//     {loading && <div>正在加载中</div>}
//     {loading || <div>加载完毕页面内容</div>}
//   </div>
// )

// if/else
const showLoading = () => {
  if (loading) return <div>正在加载中</div>
  return <div>加载完毕页面内容</div>
}

const element = <div>{showLoading()}</div>

ReactDom.render(element, document.getElementById('root'))
