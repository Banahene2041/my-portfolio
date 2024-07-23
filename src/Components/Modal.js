import React,{useEffect} from 'react'
import Logo from './Logo'
import {link} from "../data"
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom'
// import Links from './Links';
// import Talk from './Talk';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa';


function Modal() {
  const {darkMode,setDarkMode,handleDarkMode,showModal,hideModal} = useGlobalContext()

  useEffect(()=> {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme){
      setDarkMode(JSON.parse(storedTheme))
    }
  },[])

  return (
    <div className={`${showModal ? "open-modal modal-container" : "modal-container hide-modal"}`}>
      <div className={`${darkMode ? "modal modal-active" : "modal modals"}`}>
        <Logo />
        <FaTimes className='times' onClick={hideModal} />
        <div className='modal-links'>
        <ul>
            {link.map((item) => {
            const {id,name,icon,path} = item
            return <li key={id} className={`${darkMode ? "listing-active" : "listing" }`}>
                <Link to={path} className={`${darkMode ? "link link-active" : "link link-origin"}`}>
                <span>{icon}</span>
                {name}
                </Link>
            </li>
        })}
        </ul>
    </div>
    {/* <Talk title="change appearance" /> */}
    <div className='custom-container'>
      <span onClick={handleDarkMode} className={`${darkMode ? "moon-active moon" : "original-moon moon"}`}>
        {darkMode ? <IoMdSunny /> : <FaMoon />}
        change appearance
      </span>
      <div>
        <Link to={"/contact"} className='talk'>
        <h4>let's talk</h4>
        <span><FaArrowTrendUp /></span>
        </Link>
      </div>
    </div>
      </div>
    </div>
  )
}
export default Modal
