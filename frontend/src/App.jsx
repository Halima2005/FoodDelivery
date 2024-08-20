import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Pages/Cart/Cart'
import Home from './components/Pages/Home/Home'
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
       </Routes>

    
    </div>
  )
}

export default App