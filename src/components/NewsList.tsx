import React, { useEffect } from 'react'
import avatar from '../assets/back.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { setNews } from '../store/actions/news'
export default function NewsList() {
  const dispatch = useDispatch()
  const { active }: any = useSelector<any>((state) => state.channels)
  useEffect(() => {
    dispatch(setNews(active))
  }, [active])
  return (
    <div className="list">
      <div className="article_item">
        <h3 className="van-ellipsis">python数据预处理 ：数据标准化</h3>
        <div className="img_box">
          <img src={avatar} className="w100" alt="" />
        </div>
        <div className="info_box">
          <span>13552285417</span>
          <span>0评论</span>
          <span>2018-11-29T17:02:09</span>
        </div>
      </div>
    </div>
  )
}
