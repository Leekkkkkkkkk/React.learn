import React, { Component } from 'react'
interface ImgPostionType {
  x: number
  y: number
}
export default class ImgPostion extends Component<ImgPostionType> {
  render() {
    return (
      <div>
        <img
          style={{
            position: 'fixed',
            top: this.props.y,
            left: this.props.x,
            width: 100,
            height: 100,
          }}
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx3.sinaimg.cn%2Fmw690%2F001Qudtlly1gyzcj7jaijj60s30skgn202.jpg&refer=http%3A%2F%2Fwx3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646983101&t=07c45abd3c316cf8b8e2f94307e0a8e4"
          alt=""
        />
      </div>
    )
  }
}
