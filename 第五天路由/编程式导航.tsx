import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Login = (props: any) => {
  console.log(props)
  return (
    <div>
      登录
      <button onClick={() => props.history.push('/reg')}>去注册</button>
    </div>
  )
}
const Reg = (props: any) => {
  console.log(props)

  return (
    <div>
      注册<button onClick={() => props.history.go(-1)}>前进/后退</button>
    </div>
  )
}
const Is404 = () => <div>404</div>
const App = () => {
  return (
    <Router>
      <Link to="/login">登录</Link>
      <Link to="/reg">注册</Link>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/reg">
          {(history) => {
            console.log(history)
            return <Reg {...history} />
          }}
        </Route>
        <Route component={Is404} />
      </Switch>
    </Router>
  )
}

export default App
