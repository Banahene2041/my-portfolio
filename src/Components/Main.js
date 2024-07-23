import React from 'react'
import Expertise from './Expertise'
import Together from './Together'
import Projects from './Projects'

function Main() {
  return (
    <div className='main'>
      <div>
        <Expertise />
        <Together />
      </div>
      <div>
         <Projects />
      </div>
    </div>
  )
}

export default Main
