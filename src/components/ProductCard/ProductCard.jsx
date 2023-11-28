import React, { useContext } from 'react'
import './ProductCard.css'
import {BsFillBagPlusFill} from 'react-icons/bs'
import {IoBagCheck} from 'react-icons/io5'
import appContext from '../Context/AppContext'

const ProductCard = ({data}) => {

   const {image, name, price} = data
   const {addedToCartItems,setAddedToCartItems} = useContext(appContext)
const exist = addedToCartItems.find((i) => i.id == data.id)

   const addToCart = (item) => {

     if(exist) {
      return addedToCartItems.map((i)=> i.id == item.id ? i.quantity+= 1 : i ) 
     }
     
     else{
      setAddedToCartItems(prev=>{
        const newArray = [...prev, {
          id: item.id,
          name: name,
          category: item.category,
          image:image,
          price:price,
          quantity : 1
        }]
        return newArray
      })

     }

   }
 
  return (
    <>
     <div className='productCard'>
        <div className='ProductCardContainer'>
            <img src={image} alt="" />
            <div className='productInfos'>
                <div>
                  <p>{name}</p>
                  <p>R$ {price}</p>
                </div>
                <button 
                onClick={()=>{addToCart(data)}}
                className='addToBag'>
                  {exist ? <IoBagCheck size={23}/> : <BsFillBagPlusFill size={20}/> }
               
                </button>
            </div>
        </div>
     </div>
    </>
  )
}

export default ProductCard