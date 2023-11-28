import React, { useContext } from 'react'
import './Filter.css'
import appContext from '../Context/AppContext'
import { data } from '../data/data'

const Filter = () => {

  const {Product,setProduct} = useContext(appContext)

  const filterProductsType = (type) =>{

    const newArray = [...data]
    const filteredProducts = newArray.filter((product)=>product.category===type)

    setProduct(filteredProducts)

  }

  const filterProductsPrice = (type) => {

    const newArray = [...data]
    const filteredProducts = newArray.filter((product)=>product.price===type)

    setProduct(filteredProducts)

  }

  return (
    <>
        <section className='Filter'>
           
        <section className="filterType">
            <h5>Tipo</h5>
                 <div className="filterTypeContainer">
                    <button className='filterBtn'onClick={()=>{filterProductsType('burger')}}>Hamburger</button>
                    <button className='filterBtn' onClick={()=>{filterProductsType('pizza')}}>Pizza</button>
                    <button className='filterBtn' onClick={()=>{filterProductsType('salad')}}>Salada</button>
                    <button className='filterBtn' onClick={()=>{filterProductsType('chicken')}}>Frango</button>
                </div>
             </section>

             <section className="filterPrice">
                <h5>Preço</h5>
                 <div className="filterPriceContainer">
                    <button className='filterBtn' onClick={()=>{filterProductsPrice(10)}}>R$ 10</button>
                    <button className='filterBtn' onClick={()=>{filterProductsPrice(20)}}>R$ 20</button>
                    <button className='filterBtn' onClick={()=>{filterProductsPrice(30)}}>R$ 30</button>
                    <button className='filterBtn' onClick={()=>{filterProductsPrice(40)}}>R$ 40</button>
                </div>
             </section>

             <button className='filterBtn resetFilter' onClick={()=>{setProduct(data)}} >Ver todos</button>

        </section>

    </>
  )
}

export default Filter