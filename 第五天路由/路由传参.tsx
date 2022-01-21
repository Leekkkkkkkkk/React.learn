import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Goods = (props: any) => {
  console.log(props)
  return <div>商品:{props.match.params.id}</div>
}
const App = () => {
  return (
    <>
      <Router>
        <Link to="/goods/1">袜子</Link>
        <Link to="/goods/2">鞋子</Link>
        <Route path="/goods/:id" component={Goods} />
      </Router>
    </>
  )
}

export default App
