import { render } from 'react-dom'
import App from './App'
import store from './store'
render(<App />, document.getElementById('root'))
store.subscribe(() => {
  render(<App />, document.getElementById('root'))
})
