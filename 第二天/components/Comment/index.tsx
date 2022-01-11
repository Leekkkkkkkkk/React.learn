import React, { Component } from 'react'
import '../../css/index.css'
import { user, comments } from './data'
import classNames from 'classnames'
export default class Comment extends Component {
  state = {
    user,
    comments,
    content: '',
  }
  changContent = (e: { target: { value: string } }) => {
    const { value } = e.target
    if (value.length > 100) return
    this.setState({ content: value.trim() })
  }
  onSubmit = () => {
    const { content, comments, user } = this.state
    if (!content.length) return alert('请输入内容')
    if (comments.some((item) => item.content === content))
      return alert('已经有相同评论')
    this.setState({
      comments: [
        {
          ...user,
          id: Math.random(),
          content,
          time: new Date().toLocaleString('chinese', { hour12: false }),
          collect: false,
        },
        ...comments,
      ],
      content: '',
    })
  }
  //删除
  editDelete = (id: number) => {
    console.log(id)
    const { comments } = this.state
    this.setState({
      comments: comments.filter((item) => item.id !== id),
    })
  }
  changCollect = (ite: {
    id: any
    name?: string
    avatar?: string
    content?: string
    time?: string
    vip?: boolean
    collect?: boolean
  }) => {
    console.log('123')
    const { comments } = this.state
    this.setState({
      comments: comments.map((item) => {
        if (item.id === ite.id) {
          return { ...item, collect: !item.collect }
        } else {
          return item
        }
      }),
    })
  }
  render() {
    const { comments, user, content } = this.state
    return (
      <div className="comments">
        <h3 className="comm-head">评论</h3>
        <div className="comm-input">
          <textarea
            value={content}
            onChange={this.changContent}
            placeholder="爱发评论的人，运气都很棒"
          ></textarea>
          <div className="foot">
            <div className="word">{content.length}/100</div>
            <div className="btn" onClick={this.onSubmit}>
              发表评论
            </div>
          </div>
        </div>
        <h3 className="comm-head">
          热门评论<sub>({comments.length})</sub>
        </h3>
        <ul className="comm-list">
          {comments.map((item) => {
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
                    {item.time}
                    <span
                      onClick={() => {
                        this.changCollect(item)
                      }}
                      className={`iconfont icon-collect${
                        item.collect ? '-sel' : ''
                      }`}
                    ></span>
                    {user.name === item.name ? (
                      <span
                        className="del"
                        onClick={() => {
                          this.editDelete(item.id)
                        }}
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
      </div>
    )
  }
}
