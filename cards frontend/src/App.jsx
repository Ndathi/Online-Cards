import { useState } from 'react'
import Avatar from "@mui/material/Avatar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='top-image'>

    </div>
    <div id='section-1'>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
    </div>
    </>
  )
}

export default App
