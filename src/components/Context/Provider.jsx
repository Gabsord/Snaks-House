import React, { useState } from 'react'
import appContext from './AppContext'
import {data} from '../data/data.js'
import { categories } from '../data/data.js'

const Provider = ({children}) => {

    const [Product, setProduct] = useState(data)
    const[Categories, setCategories] = useState(categories)
    const [isSideMenu, setIsSideMenu] = useState(false)
    const[addedToCartItems, setAddedToCartItems] = useState([])

    const value = {
        Product, 
        setProduct,
        Categories, 
        setCategories,
        isSideMenu, 
        setIsSideMenu,
        addedToCartItems, 
        setAddedToCartItems
    }


  return (
    <appContext.Provider value={value}>
        {children}
    </appContext.Provider>
  )
}

export default Provider