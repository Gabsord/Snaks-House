import React, { useContext} from 'react'
import appContext from '../Context/AppContext'

import './Categories.css'

const Categories = () => {

    const{Categories} = useContext(appContext)
    
 
  return (
    <>
    <div className='categories'>
        <div className='categoriesContainer'>
            <div className='categorieGrid'>
                {
                    Categories.map((item)=> {
                        return(
                            <div key={item.id} className='categorieItem'>
                            <div className='categorieImg'>
                                <img src={item.image} alt="" />
                            </div>
                            <p>{item.name}</p>
                        </div>

                        )
                    })
                }
               
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Categories