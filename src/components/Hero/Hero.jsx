import React from 'react'
import './Hero.css'

const Hero = () => {
  return (

<div className='Hero'>

      <div className='HeroContainer'>

        <div className='overlay'>
          <p className='Text'>Vai um <span style={{color:'#b82727'}}>lanchinho</span> ai ?</p>
        </div>

        <img className='HeroImg' src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        
      </div>

</div>
  
  
  )
}

export default Hero