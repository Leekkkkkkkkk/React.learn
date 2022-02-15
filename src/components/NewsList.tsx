import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../assets/back.jpg'
import { RootState } from '../store'
import { getArticle } from '../store/actions/article'
function NewsList() {
  const active = useSelector((state: RootState) => state.channel.active)
  const article = useSelector((state: RootState) => state.newList.ArticleList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticle(active))
  }, [active])
  return (
    <div className="list">
      {article.map((item) => {
        return (
          <div className="article_item" key={item.art_id}>
            <h3 className="van-ellipsis">{item.title}</h3>
            <div className="img_box">
              <img
                src={item.cover.images ? item.cover.images[0] : avatar}
                className="w100"
                alt=""
              />
            </div>
            <div className="info_box">
              <span>{item.aut_id}</span>
              <span>{item.comm_count}评论</span>
              <span>{item.pubdate}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NewsList
