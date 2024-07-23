import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Project from "./Pages/Project"
import Header from './Components/Header'
import { useGlobalContext } from './context'
import Modal from './Components/Modal'
import Clipboard from './Components/Clipboard'

function App() {

  const {darkMode} = useGlobalContext()

  return (
    <div className={`${darkMode ? "dark-mode container" : "light-mode container"}`}>
    <Header />
    <Clipboard />
    <Modal />
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/about"} element={<About />}/>
      <Route path={"/project"} element={<Project />} />
      <Route path={"/contact"} element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
