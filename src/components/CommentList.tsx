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
}: {
  comments: Array<Iprops>
  active: string
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
                  className={`iconfont icon-collect${
                    item.collect ? '-sel' : ''
                  }`}
                ></span>
                <span className="del">删除</span>
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
