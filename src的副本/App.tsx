import { BrowserRouter as Router, Link, Route, useHistory } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

const App = () => {
  return (
    <Router>
      <Link to="/login">login</Link>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  )
}

export default App
