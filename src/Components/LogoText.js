import React from 'react'
import { useGlobalContext } from '../context';

const LogoText = () => {
  const {darkMode} = useGlobalContext()

  return (
    <>
      <h1 className={`${darkMode ? "logo-text logoText-active" : "logo-text"}`}>my <span>cv</span></h1>
    </>
  )
}

export default LogoText
