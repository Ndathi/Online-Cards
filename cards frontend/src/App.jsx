import { useState } from 'react'
import Avatar from "@mui/material/Avatar"
import { TextField } from '@mui/material'
import mail from "./assets/mail.png"
import phone from "./assets/phone.png"
import twitter from "./assets/twitter.png"
import Linkedin from "./assets/Linkedin.png"
import Browser from "./assets/Browser.png"
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
    <div id='avatar'>
  {/* <img src={phone} alt="" /> */}
</div>
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

    <div className='contact-information'>
      <div className='contact-information-tile'>
        <img src={phone} alt="" className='contact-information-image' />
        <h4 className='contact-information-txt'>Contact</h4>
        </div>
        <p className='txt-content'><span className='txt-content-title'>Name</span> <br />Ian Ndathi Mburu</p>
        <p className='txt-content'><span className='txt-content-title'>Mobile</span> <br />+2547 98 086 588</p>
        <p className='txt-content'><span className='txt-content-title'>Email</span> <br />ian.ndathi@amref.org</p>
        <p className='txt-content'><span className='txt-content-title'>Company</span> <br />Amref Kenya Country Office</p>
        <p className='txt-content'><span className='txt-content-title'>Department</span> <br />ICT</p>
    </div>

    <div className='contact-information'>
    <div className='contact-information-tile'>
        <img src={sms} alt="" className='contact-information-image' />
        <h4 className='contact-information-txt'>Summary</h4>
        </div>
      <p>Lorem isum dolor sit amet consectetur adipisicing elit. At inventore itaque expedita iure dignissimos nostrum molestias explicabo veritatis voluptas unde, tempore ratione provident voluptatum earum nihil corrupti libero quos cum.</p>
    </div>

    <div className='contact-information'>
    <div className='contact-information-tile'>
        <img src={location} alt="" className='contact-information-image' />
        <h4 className='contact-information-txt'>Location</h4>
        </div>
      <p > PO Box 27691-00506 Nairobi, Kenya Langata Rd Tel: +254 20 6994000
</p></div>

<div className='contact-information'>
    <div className='contact-information-tile'>
        <img src={Browser} alt="" className='contact-information-image' />
        <h4 className='contact-information-txt'>Websites</h4>
        </div>
      <p >
        <a href="https://www.bing.com/ck/a?!&&p=a3b5364e61c659d4JmltdHM9MTY5Mzg3MjAwMCZpZ3VpZD0xODUwZmE3ZC1jZTM4LTZmNDMtMWRmYy1lOTZmY2ZhZTZlNDYmaW5zaWQ9NTIyMw&ptn=3&hsh=3&fclid=1850fa7d-ce38-6f43-1dfc-e96fcfae6e46&psq=amref&u=a1aHR0cHM6Ly9hbXJlZi5vcmcv&ntb=1"></a> Amref Health Africa</p>
      </div>
      <div className='contact-information'>
    <div className='contact-information-tile'>
        <img src={twitter} alt="" className='contact-information-image' />
        <h4 className='contact-information-txt'>Twitter</h4>
        </div>
          <hr />
        <div className='contact-information-tile'>
        <img src={Linkedin} alt="" className='contact-information-image' />
        <h4 className='contact-information-txt'>Linkedin</h4>
        </div>
    </div>
    </div>
    </>
  )
}

export default App
