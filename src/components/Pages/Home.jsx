import React from 'react'
import Hero from '../Hero/Hero'
import Promotions from '../Promoções/Promotions'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'


const Home = () => {
  return (
   <>
      <Hero />
      <Promotions />
      <Products />
      <Categories/>
   </>
  )
}

export default Home