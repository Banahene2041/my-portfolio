import React from 'react'
import {expert} from "../data"
function Expertise() {
  return (
    <section className='expert-section'>
      <div>
        {expert.map((item) => {
          const {name,id,image} = item
          return <div key={id} className='expert-container'>
            <div className='expert-img-div'>
              <img src={image} alt="" />
            </div>
            <div><h3>{name}</h3></div>
          </div>
        })}        
      </div>
    </section>
  )
}

export default Expertise
