import React from 'react'
import './emptyCart.css'
import {BsBagX} from 'react-icons/bs'

const EmptyCart = () => {
  return (
    <>
        <div className='emptyCart'>
        <p className='emptyCartMsg'>Seu carrinho está vazio :c</p>
        <BsBagX size={200} className='emptyCartIcon'/>
          
        </div>
    </>
  )
}

export default EmptyCart