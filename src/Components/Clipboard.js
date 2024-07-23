import React from 'react'
import { useGlobalContext } from '../context'

function Clipboard() {
    const {showClipboard} = useGlobalContext()

  return (
    <div className={`${showClipboard? "clipboard show-clipboard" : "clipboard"}`}>
      <p>Copied to Clipboard</p>
      <h5 className='close'>Close</h5>
    </div>
  )
}

export default Clipboard
