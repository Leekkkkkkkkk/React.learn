import { render } from 'react-dom'
import App from './App'
import './styles/index.css'
import './styles/base.css'
import { Provider } from 'react-redux'
import store from './store/index'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
