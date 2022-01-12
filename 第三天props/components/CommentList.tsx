import classNames from 'classnames'
import dayJs from 'dayjs'
type Iprops = {
  id: number
  name: string
  avatar: string
  content: string
  time: Date | string | any
  vip: boolean
  collect: boolean
}
const CommentList = ({
  comments,
  active,
  username,
  editCommentDelete,
  collectComment,
}: {
  comments: Array<Iprops>
  active: string
  username: string
  editCommentDelete: (id: number) => void
  collectComment: (id: number) => void
}) => {
  const formateTime = (time: Date) => {
    return dayJs(time).format('YYYY-MM-DD')
  }
  const newComments = [...comments]
  if (active === 'time') {
    newComments.sort((a, b) => a.time - b.time)
  } else {
    newComments.sort((a, b) => a.id - b.id)
  }
  return (
    <ul className="comm-list">
      {newComments.map((item: Iprops) => {
        return (
          <li className="comm-item" key={item.id}>
            <div
              className="avatar"
              style={{ backgroundImage: `url(${item.avatar})` }}
            ></div>
            <div className="info">
              <p className={classNames('name', { vip: item.vip })}>
                {item.name}
                {item.vip ? (
                  <img
                    alt=""
                    src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png"
                  />
                ) : null}
              </p>
              <p className="time">
                {formateTime(item.time)}
                <span
                  onClick={() => collectComment(item.id)}
                  className={`iconfont icon-collect${
                    item.collect ? '-sel' : ''
                  }`}
                ></span>
                {username === item.name ? (
                  <span
                    onClick={() => editCommentDelete(item.id)}
                    className="del"
                  >
                    删除
                  </span>
                ) : null}
              </p>
              <p>{item.content}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default CommentList
