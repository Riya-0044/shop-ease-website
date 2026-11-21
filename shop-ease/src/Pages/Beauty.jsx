import React from 'react'

import { Routes, Route } from "react-router-dom";
import BeautyHero from '../Components/Beauty/BeautyHero'
import BeautyCategory from '../Components/Beauty/BeautyCategory'
import BeautyProduct from '../Components/Beauty/BeautyProduct'

const Beautyproductscategory = () => {
  return (
    <div>
      <BeautyHero/>
      <BeautyCategory/>
      <Routes>
        <Route path=":category" element={<BeautyProduct />} />
      </Routes>
      
    </div>
  )
}

export default Beautyproductscategory
