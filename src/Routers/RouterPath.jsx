import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from'../features/pages/Home'
import About from'../features/pages/About'
import ContactUs from'../features/pages/ContactUs'
import Products from'../features/pages/Products'
import Cart from'../features/pages/Cart'
import NotFound from '../features/pages/NotFound'
import CategoryProducts from '../features/products/CategoryProducts'
import ProductDetails from '../features/products/ProductDetails'
import ProductsLayout from '../features/products/ProductsLayout'
const routers = ()=>{

    return(
        <div>
            
<Routes>
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>}/>
    <Route path="contactUs" element ={<ContactUs/>}/>
     {/* ניתוב מקונן לדף המוצרים */}
     <Route path="products" element={<ProductsLayout/>}>
  <Route index element={<Products />} />
  <Route path=":category" element={<CategoryProducts />} />
  <Route path="details/:productId" element={<ProductDetails />} />
</Route>
    <Route path='cart' element={<Cart/>}/>
    <Route path="*" element={<NotFound/>}/>
   
</Routes>
        </div>
    )
}

export default routers