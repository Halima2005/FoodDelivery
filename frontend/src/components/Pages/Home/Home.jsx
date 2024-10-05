import React, { useState } from 'react'
import AppDownload from '../../AppDownload/AppDownload.jsx'
import ExploreMenu from '../../ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../FoodDisplay/FoodDisplay.jsx'
import Header from '../../Header/Header'
import './Home.css'
const Home = () => {
    const [category,setCategory] =useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home