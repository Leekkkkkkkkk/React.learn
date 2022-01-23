import useMouse from '../hooks/useMouse'
const ShowImg = () => {
  const position = useMouse()
  return (
    <div>
      <img
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
        }}
        src="http://destiny001.gitee.io/image/monkey_02.jpg"
        alt=""
      />
    </div>
  )
}

export default ShowImg
