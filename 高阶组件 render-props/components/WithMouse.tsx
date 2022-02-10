import React from 'react'
const WithMouse = (Component: any) => {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    }
    onMouseMove = (e: MouseEvent) => {
      this.setState({
        x: e.pageX,
        y: e.pageY,
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.onMouseMove)
    }
    render() {
      const { x, y } = this.state
      return <Component x={x} y={y} />
    }
  }
  return Mouse
}
export default WithMouse
