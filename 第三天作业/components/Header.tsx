import { SetStateAction, useState } from 'react'

type props = {
  addTodo: (content: string) => void
}
const Header = ({ addTodo }: props) => {
  const [content, setContent] = useState('')
  //输入内容
  const editChange = (e: { target: { value: SetStateAction<string> } }) => {
    setContent(e.target.value)
  }
  //添加数据
  const editContent = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      if (content === '') return alert('请输入内容')
      addTodo(content)
      setContent('')
    }
  }

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={content}
          onChange={editChange}
          onKeyUp={editContent}
        />
      </header>
    </div>
  )
}
export default Header
