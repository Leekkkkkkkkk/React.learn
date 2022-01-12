import React, { Component } from 'react'
import CommentHeader from './components/CommentHeader'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import './index.css'
import { user, comments } from './data'
export default class App extends Component {
  state = {
    user,
    comments,
    //default默认高亮 time 高亮
    active: 'default',
  }
  //改变高亮
  setActive = (value: string) => {
    this.setState({
      active: value,
    })
  }
  //添加评论
  addComment = (content: string) => {
    console.log(content)
    this.setState({
      comments: [
        ...this.state.comments,
        {
          ...this.state.user,
          id: Math.random(),
          content,
          collect: false,
          time: new Date(),
        },
      ],
    })
  }
  editCommentDelete = (id: number) => {
    this.setState({
      comments: this.state.comments.filter((item) => item.id !== id),
    })
  }
  collectComment = (id: number) => {
    this.setState({
      comments: this.state.comments.map((item) => {
        return item.id === id ? { ...item, collect: !item.collect } : item
      }),
    })
  }
  render() {
    const { comments, active } = this.state
    return (
      <div className="comments">
        <h3 className="comm-head">评论</h3>
        <CommentInput addComment={this.addComment} />
        <CommentHeader
          active={active}
          setActive={this.setActive}
          length={comments.length}
        />
        <CommentList
          comments={comments}
          active={active}
          username={this.state.user.name}
          editCommentDelete={this.editCommentDelete}
          collectComment={this.collectComment}
        />
      </div>
    )
  }
}
