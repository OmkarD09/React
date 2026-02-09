import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form.jsx'
import './App.css'
import Comments from './Comments.jsx';
import Jokes from './Jokes.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Form /> */}
    {/* <Comments /> */}

    <Jokes />
    
    </>
  )
}

export default App
