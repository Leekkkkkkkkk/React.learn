import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return (
    <Router>
      <div>App</div>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
      </ul>
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default App
