import React, { Component, MouseEvent } from 'react'

type Iprops = {
  addComment: (content: string) => void
}
export default class CommentInput extends Component<Iprops> {
  state = {
    content: '',
  }
  contentChange = (e: { target: { value: string } }) => {
    this.setState({
      content: e.target.value.trim(),
    })
  }
  //发表评论
  sendComment = () => {
    if (this.state.content === '') return alert('您没有输入内容')
    this.props.addComment(this.state.content)
    this.setState({
      content: '',
    })
  }
  render() {
    const { content } = this.state
    return (
      <div className="comm-input">
        <textarea
          value={content}
          onChange={this.contentChange}
          placeholder="爱发评论的人，运气都很棒"
        ></textarea>
        <div className="foot">
          <div className="word">{content.length}/100</div>
          <div onClick={this.sendComment} className="btn">
            发表评论
          </div>
        </div>
      </div>
    )
  }
}
