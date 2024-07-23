import React, { useState } from 'react'
import {link} from "../data"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';


function Links() {
  const [activeLink,setActiveLink] = useState("")
  const {darkMode} = useGlobalContext()


  return (
    <div className='nav-links'>
        <ul>
            {link.map((item) => {
            const {id,name,icon,path} = item
            return <li key={id} className={`${activeLink === name ? darkMode ? "dark-active" : "active" : ""}`} onClick={() => setActiveLink(name)}>
                <Link to={path} className={`${darkMode ? "link mobile link-active" : "link mobile links"}`}>
                <span>{icon}</span>
                {name}
                </Link>
            </li>
        })}
        </ul>
    </div>
  )
}

export default Links


// className={`${activeLink === name && "active"}`}