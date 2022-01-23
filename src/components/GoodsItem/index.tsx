import React from 'react'
import './index.scss'
const GoodsItem = ({ row, updateState }: any) => {
  
  return (
    <div className="my-goods-item" style={{ margin: '50px 0' }}>
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={row.goods_state}
            className="custom-control-input"
            id={row.id}
            onChange={() => updateState(row.id)}
          />
          <label className="custom-control-label" htmlFor={row.id}>
            <img src={row.goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{row.goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {row.goods_price}</span>
          <span>counter组件</span>
        </div>
      </div>
    </div>
  )
}
export default GoodsItem
