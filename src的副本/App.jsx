import { useSelector, useDispatch } from 'react-redux'
import { addAsync } from './store/actions/lists'
const App = () => {
  const { count } = useSelector((state) => state.list)
  const dispatch = useDispatch()
  return (
    <div>
      {count}
      <button onClick={() => dispatch(addAsync(1))}>点击+1</button>
    </div>
  )
}

export default App
