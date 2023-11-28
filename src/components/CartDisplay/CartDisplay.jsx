import React, { useContext } from 'react'
import './CartDisplay.css'
import {LuArrowBigDown} from 'react-icons/lu'
import CartItem from '../CartItem/CartItem'
import appContext from '../Context/AppContext'
import EmptyCart from '../EmptyCart/EmptyCart'

const CartDisplay = () => {

  const {addedToCartItems} = useContext(appContext)

  const getTotal = () => {
   if(addedToCartItems.length > 0 ){
     let sum = 0
     for (let item of addedToCartItems) {
       sum += item.price * item.quantity
     }
     return sum
   } else return 0
  }

  let currencyFormat = new Intl.NumberFormat('pt-BR' , {
    style:'currency',
    currency:'BRL'
  })

  const total = currencyFormat.format(getTotal())

  return (
    <>  
          <section className='cartBoard'>
            <div className="cartBoardContainer">
                <h3>Seu carrinho <LuArrowBigDown/> </h3>
                <section className='cartItens'>
                  {addedToCartItems.length > 0 
                  ? addedToCartItems.map((item)=> <CartItem data={item} key={item.id}/>) 
                  : <EmptyCart/>
                  }
                </section>

                <section className='totalValue'>
                <h2>Valor total <span style={{color:'#09cf09'}}>{total}</span></h2>
               </section>
                
            </div>

          </section>
    
    </>
  
  )
}

export default CartDisplay