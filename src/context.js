import React, { useContext,useEffect,useState } from 'react'

const appContext = React.createContext()

function AppProvider({children}) {
    
 const [darkMode, setDarkMode] = useState(false)
 const [showModal,setShowModal] = useState(false)
 const [showClipboard,setShowClipboard] = useState(false)
 const [scroll,setScroll] = useState(false)
 const gmail = `0542342728c@gmail.com`

 const openClipboard = () => {
  setShowClipboard(true)
  navigator.clipboard.writeText(gmail)
 }

 const handleDarkMode = ()=> {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    localStorage.setItem("theme", JSON.stringify(newTheme))
  }

  useEffect(()=> {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme){
      setDarkMode(JSON.parse(storedTheme))
    }
  },[])

 const openModal = () => {
  setShowModal(true)
 }

 const hideModal = () => {
  setShowModal(false)
 }

 const handleScroll = () => {
  const scrollY = window.scrollY
  if (scrollY >= 20){
    setScroll(true)
  }
  else{
    setScroll(false)
  }
 }

 React.useEffect(()=> {
  const timeout = setTimeout(()=> {
    setShowClipboard(false)
  },2000)
  return ()=> clearTimeout(timeout)
 },[showClipboard])

  return (
    <appContext.Provider value={{
        darkMode,
        setDarkMode,
        showModal,
        openModal,
        hideModal,
        handleDarkMode,
        openClipboard,
        showClipboard,
        gmail,
        scroll,
        handleScroll,
    }}>
      {children}
    </appContext.Provider>
  )
}

export const useGlobalContext = ()=> {
    return useContext(appContext)
}

export {AppProvider,appContext}
