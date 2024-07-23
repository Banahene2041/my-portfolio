import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/banahene.jpg'
import { FiPhoneCall, FiCopy } from 'react-icons/fi'
import { IoLogoFacebook,IoLogoGithub } from "react-icons/io";
import { FaInstagram,FaWhatsapp,FaLinkedinIn } from "react-icons/fa";
import { useGlobalContext } from '../context';

function Aside() {
  const {darkMode,openClipboard,gmail} = useGlobalContext()
  return (
    <aside className='aside'>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <h4>Banahene Owusu Gideon</h4>
      <p>A <span>Passionate</span> Full Stack Developer 🖥️ having 2 years of <span>Experiences so far and still improving.</span></p>
      <div className='intouch'>
        <Link target='_blank' to={'https://facetime.apple.com/join#v=1&p=NekXASa8Ee+TSZ6XY2xMtw&k=FXEByYkyWx-owfOr8Jqu8jt3Bf-voQIBnLz_A56iTBs'} rel='noreferrer' className='call'>
          <span><FiPhoneCall/></span>
          <span>Call</span>
          </Link>
          <Link target='_blank' to={'https://whatsapp.com/dl/'} rel='noreferrer' className={`${darkMode? "whatsapp whatsapp-active" :"whatsapp"}`}><span><FaWhatsapp /></span></Link>
          <div className={`${darkMode? "email email-active" : "email"}`} onClick={openClipboard}>
            <span><FiCopy /></span>
            <span> Email <p className='gmail'>{gmail}</p></span>
          </div>
      </div>
      <div className="icons">
            <Link target='_blank' to={'https://t.co/yycJhLtPGE'} rel='noreference' className={`${darkMode? "icon icon-active" : "icon icon-light"}`}><IoLogoFacebook /></Link>
            <Link target='_blank' to={'https://twitter.com/gideon_owusu23?t=iwt1_svHDudwmSdjBLhlew&s=09'} rel='noreference' className={`${darkMode? "icon icon-active" : "icon icon-light"}`}><FaInstagram /></Link>
            <Link target='_blank' to={'https://github.com/Banahene2041/my-Restaurant-App.git'} rel='noreference' className={`${darkMode? "icon icon-active" : "icon icon-light"}`}><IoLogoGithub /></Link>
            <Link target='_blank' to={'https://www.linkedin.com/in/owusu-gideon-0542342728c/'} rel='noreference' className={`${darkMode? "icon icon-active" : "icon icon-light"}`}><FaLinkedinIn /></Link>
          </div>
    </aside>
  )
}

export default Aside
