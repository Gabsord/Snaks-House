import React from 'react'
import './Promotions.css'
import {LuArrowBigDown} from 'react-icons/lu'

const Promotions = () => {
  return (

    <div className='Promotions'>
        <div className='PromotionsContainer'>
            <h1> Promoções do dia! <span><LuArrowBigDown/></span> </h1>

            <div className='PromotionCards'>

                <div className='PromotionCard'> 
                    <img src="https://images.pexels.com/photos/2987564/pexels-photo-2987564.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                <div className='PromotionOverlay'>
                        <p>Combo CASAL </p>
                        <button><h4>Peça Agora!</h4></button>
                </div>
                </div>

                <div className='PromotionCard'>
                    <img src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <div className='PromotionOverlay'>
                        <p>Combo PADRÃO</p>
                        <button><h4>Peça Agora!</h4></button>
                    </div>
                </div>

                <div className='PromotionCard'>
                    <img src="https://images.pexels.com/photos/3566357/pexels-photo-3566357.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <div className='PromotionOverlay'>
                        <p>Combo MINI-BURGERS</p>
                        <button><h4>Peça Agora!</h4></button>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Promotions