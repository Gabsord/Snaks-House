import React, { useContext, useEffect } from 'react'
import{AiOutlineClose,AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import './CartItem.css'
import appContext from '../Context/AppContext';



const CartItem = ({data}) => {

  
  const {addedToCartItems, setAddedToCartItems} = useContext(appContext)

  const add1Item = (item) => {
    const newArray = [...addedToCartItems]
    newArray.map ((i) => i.id == item.id ? i.quantity ++ : i)
    setAddedToCartItems(newArray)
   
  } 

  const remove1Item = (item) => {
    const newArray = [...addedToCartItems]

    if(item.quantity == 1) {
      const removeItem = newArray.filter((i)=> i.id != item.id)
      setAddedToCartItems(removeItem)
    }
    else{ 
      newArray.map((i) => i.id == item.id ? i.quantity -- : i)
      setAddedToCartItems(newArray)
    }
  
  }

  const deleteItem = (item) => {
    const newArray = [...addedToCartItems]
    const filteredArray = newArray.filter((i) => i.id != item.id)
    setAddedToCartItems(filteredArray) 

  }

  return (
    <>
    <div className='cartItem'>
        <div className='cartItemContainer'>
            <div className='cartItemDetails'>
                
                  <div className='Name-Img'>
                    <img className='cartItemImg' src={data.image} alt="" />
                    <p className='itemName'>{data.name}</p>
                  </div>
        
                <div className='cartItemBtns'>
                    <div>
                      <button onClick={()=>{remove1Item(data)}}><AiOutlineMinus/></button>
                      <span>{data.quantity}</span>
                      <button onClick={()=>{add1Item(data)}}><AiOutlinePlus/></button>
                    </div>
                </div>
                <span className='cartItemPrice'>R$ {data.price}</span>
                <button onClick={()=>{deleteItem(data)}} className='cartItemDeleteBtn'><AiOutlineClose/></button>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default CartItem