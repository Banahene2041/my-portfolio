import React,{useEffect} from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';


function Talk({title}) {

  const {darkMode,handleDarkMode} = useGlobalContext()


  return (
    <div className='talk-container'>
      <span onClick={() => handleDarkMode()} className={`${darkMode ? "moon-active moon" : "original-moon moon"}`}>
        {darkMode ? <IoMdSunny /> : <FaMoon />}
        {title}
      </span>
      <div>
        <Link to={"/contact"} className='talk'>
        <h4>let's talk</h4>
        <span><FaArrowTrendUp /></span>
        </Link>
      </div>
    </div>
  )
}

export default Talk
