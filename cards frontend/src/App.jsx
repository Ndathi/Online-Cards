import { useState } from 'react'
import Avatar from "@mui/material/Avatar"
import mail from "./assets/mail.png"
import phone from "./assets/phone.png"
import location from "./assets/location.png"
import sms from "./assets/sms.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='top-image'>

    </div>
    <div id='section-2'>
    <div id='Avatar-div'>
    <Avatar id="avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
    </div>
    <div id="name-salutation">
      <h3>Ian Ndathi Mburu</h3>
      <h5>Software Engineering, computer science </h5>
    </div>
    <div id='contact-icons'>
<div className='contact-icon'>
  <img src={phone} alt="" />
</div>
<div className='contact-icon'>
  <img src={sms} alt="" />
</div>
<div className='contact-icon'>
  <img src={mail} alt="" />
</div>
<div className='contact-icon'>
  <img src={location} alt="" />
</div>
    </div>
    </div>
    </>
  )
}

export default App
