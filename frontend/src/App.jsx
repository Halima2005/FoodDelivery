import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Pages/Cart/Cart'
import Home from './components/Pages/Home/Home'
import MyOrders from './components/Pages/MyOrders/MyOrders'
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder'
import Verify from './components/Pages/Verify/Verify'
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
            <Route path='/verify' element={<Verify/>}/>
            <Route path='/myorders' element={<MyOrders/>}/>
       </Routes>

    
    </div>
    
    <Footer/>
    </>
   
  )
}

export default App