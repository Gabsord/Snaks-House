import React, { useContext } from 'react'
import {AiOutlineMenu } from 'react-icons/ai'
import{BsBag } from 'react-icons/bs'

import SideMenu from '../SideMenu/SideMenu'
import appContext from '../Context/AppContext'
import './Header.css'
import { Link } from 'react-router-dom'



const Header = () => {

const {setIsSideMenu} = useContext(appContext)
const {addedToCartItems} = useContext(appContext)

  return (
    <div className='Header'>
      
        <div className='HeaderContainer'>
              <SideMenu />
            <div className='RigthSide'>
                <button 
                onClick={()=>{setIsSideMenu(true)}}
                className='Menu'>
                  <AiOutlineMenu />
                </button>
                <Link to='/Snaks-House' className='Logo'>
                  <p style={{color:'#000'}}><span style={{color:'#fff'}}>Snack's</span> House</p>
                </Link>
            </div>
            <div className='LeftSide'>
                

                <Link to='/Cart' className='link'>
                  <button className='cart-button' >
                  <BsBag size={30} className='Cart-icon'/>
                  <span><h3>{addedToCartItems.length > 0 ?addedToCartItems.length : ''}</h3></span>
                  </button>
                </Link>

              
            </div>
        </div>
       
    </div>
  )
}

export default Header