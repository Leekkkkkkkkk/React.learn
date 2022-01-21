import { Link, BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const Login = () => {
  return <div>登录</div>
}
const Reg = () => {
  return <div>注册</div>
}
const App = () => {
  return (
    <Router>
      <NavLink to="/reg/login">登录</NavLink>
      <NavLink exact to="/reg">
        注册
      </NavLink>
      <Route path="/reg/login" component={Login} />
      <Route exact path="/reg" component={Reg} />
    </Router>
  )
}

export default App
