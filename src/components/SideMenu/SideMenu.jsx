import React, { useContext } from 'react'
import{IoIosCloseCircleOutline } from 'react-icons/io'
import {BsQuestionLg,BsTelephone,BsBag} from 'react-icons/bs'
import {PiHamburgerBold} from 'react-icons/pi'
import{RiCoupon3Line} from 'react-icons/ri'
import './SideMenu.css'
import appContext from '../Context/AppContext'
import { Link } from 'react-router-dom'

const SideMenu = () => {

  const{isSideMenu,setIsSideMenu} = useContext(appContext)
  return (
    <>
    <div className={`sideMenu ${isSideMenu && 'showSideMenu'}`}>
        <div className='sideMenuContainer'>
            <button 
            className='sideMenuCloseBtn'
            onClick={()=>{setIsSideMenu(false)}}
            ><IoIosCloseCircleOutline size={35}/>
            </button>
            <Link className='Logo' to='/Snaks-House'>
              <h3 ><span style={{color:'#000'}}>Snack's</span> House</h3>
            </Link>
            <ul className='menuItens'>
                <Link className='menuItem' to='#'>
                  <li><BsQuestionLg/> Sobre</li>
                </Link>
                <Link className='menuItem' to='#'>
                  <li><PiHamburgerBold/> Lanches</li>
                </Link>
                <Link className='menuItem' to='#'>
                  <li><BsTelephone/> Contatos</li>
               </Link>
                <Link className='menuItem' to='/cart'>
                  <li><BsBag/>Sacola</li>
                </Link>
                <Link className='menuItem' to='#'>
                  <li><RiCoupon3Line/> Cupons</li>
                </Link>
            </ul>
        </div>

    </div>
    </>
  )
}

export default SideMenu