import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import Cart from './components/Pages/Cart.jsx'

import './index.css'

const Router = createBrowserRouter([
  {
    path :'/',
    element : <App />,
    children:[
      {
        path:'/Snaks-House',
        element:<Home/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
