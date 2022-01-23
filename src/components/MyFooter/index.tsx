import React from 'react'
import './index.scss'
function MyFooter({ list, updateAll }: any) {
  const isCheckAll = list.every((item: any) => item.goods_state)
  const total = list
    .filter((item: any) => item.goods_state)
    .reduce((sum: number, item: any) => (sum += item.goods_count), 0)
  const totalPrice = list
    .filter((item: any) => item.goods_state)
    .reduce(
      (sum: number, item: any) => (sum += item.goods_count * item.goods_price),
      0
    )
  return (
    <div className="my-footer">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="footerCheck"
          checked={isCheckAll}
          onChange={() => updateAll(isCheckAll)}
        />
        <label className="custom-control-label" htmlFor="footerCheck">
          全选
        </label>
      </div>
      <div>
        <span>合计:</span>
        <span className="price">¥ {totalPrice}</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
        结算 ({total})
      </button>
    </div>
  )
}

export default MyFooter
