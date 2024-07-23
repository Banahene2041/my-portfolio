import React from 'react'
import { useGlobalContext } from '../context';


function LogoSign() {
  const {darkMode} = useGlobalContext()
  return (
    <>
    <div className='logo-container'>
    <div className={`${darkMode ? "first-active": "first-child"}`}></div> 
    <div className={`${darkMode ? "child-active" : "second-child"}`}>
        <div></div>
        <div></div>
    </div> 
    </div>
    </>
  )
}

export default LogoSign
