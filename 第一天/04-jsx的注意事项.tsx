import React from 'react'
import ReactDom from 'react-dom'

// 根标签的方式1
// const element = (
//   <div>
//     <div className="mydiv">
//       <h1>水果</h1>
//       <ul>
//         <li>苹果</li>
//         <li>橘子</li>
//       </ul>

//       <input type="checkbox" id="code" />
//       <label htmlFor="code">写代码</label>

//       <input type="checkbox" />
//       <label>打豆豆</label>

//       <span className="icon icon-dianhua" />
//     </div>
//     <div>盒子</div>
//   </div>
// )

// 根标签的方式2
// const element = (
//   <React.Fragment>
//     <div className="mydiv">
//       <h1>水果</h1>
//       <ul>
//         <li>苹果</li>
//         <li>橘子</li>
//       </ul>

//       <input type="checkbox" id="code" />
//       <label htmlFor="code">写代码</label>

//       <input type="checkbox" />
//       <label>打豆豆</label>

//       <span className="icon icon-dianhua" />
//     </div>
//     <div>盒子</div>
//   </React.Fragment>
// )

// 根标签的方式3
const element = (
  <>
    <div className="mydiv">
      <h1>水果</h1>
      <ul>
        <li>苹果</li>
        <li>橘子</li>
      </ul>

      <input type="checkbox" id="code" />
      <label htmlFor="code">写代码</label>

      <input type="checkbox" />
      <label>打豆豆</label>

      <span className="icon icon-dianhua" />
    </div>
    <div>盒子</div>
  </>
)

ReactDom.render(element, document.getElementById('root'))
