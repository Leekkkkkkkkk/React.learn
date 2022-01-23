import useMouse from '../hooks/useMouse'
const ShowPosition = () => {
  const position = useMouse()
  return (
    <div>
      鼠标的位置：{position.x},{position.y}
    </div>
  )
}

export default ShowPosition
