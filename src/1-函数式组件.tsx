import React, { FC } from 'react'

const Header: FC = () => {
  return <div>头部</div>
}
function Footer(): React.ReactElement {
  return <div>我是底部</div>
}
const Loaing = () => {
  const isLoading = false
  return isLoading ? <div>正在加载中....</div> : null
}
class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Loaing />
        App
        <Footer />
      </>
    )
  }
}

export default App
