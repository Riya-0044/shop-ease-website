import React from 'react'

import { Routes, Route } from "react-router-dom";
import FurnitureHero from '../Components/Furniture/FurnitureHero'
import FurnitureCategory from '../Components/Furniture/FurnitureCategory'
import FurnitureProduct from '../Components/Furniture/FurnitureProduct'

const Decro = () => {
  return (
    <div>
      < FurnitureHero/>
      <FurnitureCategory/> 
      <Routes>
        <Route path=":category" element={<FurnitureProduct />} />
      </Routes>
    </div>
  )
}

export default Decro
