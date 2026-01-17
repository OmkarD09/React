import { useState } from 'react'
import './App.css'
import LikeButton from './LikeButton.jsx'
import CountButton from './CountButton.jsx'

function App() {

  return (
    <>
      <h2>States in React</h2>
      <LikeButton />
      <CountButton />
    </>
  )
}

export default App
