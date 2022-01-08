import ReactDom from 'react-dom'
const element = (
  <div>
    <h1>水果</h1>
    <ul>
      <li>苹果</li>
      <li>橘子</li>
    </ul>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
