import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

const Login = () => {
  return <div>登录</div>
}
const Reg = () => {
  return <div>注册</div>
}
const App = () => {
  return (
    <Router>
      <Link to="/login">登录</Link>
      <Route path="/login" component={Login} />
      <Link to="/reg">注册</Link>
      <Route path="/reg" component={Reg} />
    </Router>
  )
}

export default App
