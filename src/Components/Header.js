import React, { useEffect } from 'react'
import Logo from './Logo'
import Links from './Links'
import Talk from './Talk'
import { useGlobalContext } from '../context'
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const { darkMode, showModal, openModal, scroll, handleScroll } = useGlobalContext()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <header>
    <nav style={{top: `${scroll? "0rem":"1rem"}`, width: `${scroll? "100%": "97%"}`, borderRadius: `${scroll?"0rem": "1rem"}`}} className={`${darkMode ? "header-active nav-container" : "nav nav-container"}`}>
      <Logo />
      <Links />
      <Talk />
      <RxHamburgerMenu className={`${darkMode ? "burger burger-active" : "burger"}`} onClick={openModal} />
    </nav>
    </header>
  )
}

export default Header

//  style={{top: `${scroll ? "0rem" : "2rem"}`}}

