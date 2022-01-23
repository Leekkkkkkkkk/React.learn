import React, { useContext } from 'react'
import CarContext from '../../CarContext'
import './index.scss'
export default function MyCount({ row }: any) {
  const { ChangeCount } = useContext(CarContext)

  return (
    <div className="my-counter">
      <button
        type="button"
        onClick={() => ChangeCount(row.id, row.goods_count - 1)}
        className="btn btn-light"
      >
        -
      </button>
      <input
        readOnly
        type="number"
        className="form-control inp"
        value={row.goods_count}
      />
      <button
        type="button"
        className="btn btn-light"
        onClick={() => ChangeCount(row.id, row.goods_count + 1)}
      >
        +
      </button>
    </div>
  )
}
