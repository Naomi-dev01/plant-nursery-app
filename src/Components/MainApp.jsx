 import React from 'react'
 import Header from './Header'
 import { BrowserRouter } from 'react-router-dom'
 import RouterPath from '../Routers/RouterPath'
 import { Provider } from 'react-redux'
 import store from '../redux/store'
import Footer from './Footer'
 
 const MainApp = () => {
     
   return (
     <div>
    <Provider store={store}>
       <BrowserRouter>
      <Header/>
            <RouterPath/>
      <Footer/>
      </BrowserRouter>
      </Provider>
     </div>
   )
 }
 
 export default MainApp
 