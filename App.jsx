import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai1 from './Bai1.jsx'
import Bai2 from './Bai2.jsx'
import Bai3 from './Bai3.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
    </>
  )
}

export default App
