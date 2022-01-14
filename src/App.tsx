import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Email = () => <div>邮箱</div>
const Mobile = () => <div>手机</div>
const Login = () => <div>登录</div>
const Reg = () => {
  return (
    <div>
      注册
      <Link to="/reg/email">邮箱注册</Link>
      <Link to="/reg/mobile">手机注册</Link>
      <p>------------</p>
      <Route path="/reg/email" component={Email}></Route>
      <Route path="/reg/mobile" component={Mobile}></Route>
    </div>
  )
}
const App = () => {
  return (
    <Router>
      <>
        <Link to="/login">登录</Link>
        <Link to="/reg">注册</Link>
        <p>``````````````````````````</p>
        <Route path="/login" component={Login}></Route>
        <Route path="/reg" component={Reg}></Route>
      </>
    </Router>
  )
}

export default App
