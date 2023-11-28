import { useContext} from "react"
import Filter from "../Filter/Filter"
import ProductCard from "../ProductCard/ProductCard"
import './Products.css'
import appContext from "../Context/AppContext"

const Products = () => {
    
    const {Product} = useContext(appContext)

    return (
        <>
        <div className="Products">
            <div className="productsContainer">
                <h1>Mais Pedidos:</h1>
                < Filter />
                <div className="productsGrid">
                    {
                        Product.map((food)=> <ProductCard key={food.id} data={food}/>)
                    }
                 
                </div>
             
            </div>
        </div>
    
        </>
    )

}

export default Products