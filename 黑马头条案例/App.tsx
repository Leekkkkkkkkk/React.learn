import React from 'react'
import Channel from './components/Channel'
import NewsList from './components/NewsList'
export default function App() {
  return (
    <div className="app">
      <Channel></Channel>
      <NewsList></NewsList>
    </div>
  )
}
