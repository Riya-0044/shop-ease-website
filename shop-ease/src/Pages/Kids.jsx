import React from 'react'
import { Routes, Route } from "react-router-dom";
import KidsHero from '../Components/Kids/KidsHero'
import KidsCategory from '../Components/Kids/KidsCategory'
import KidsProduct from '../Components/Kids/KidsProduct'

const Kids = () => {
  return (
    <div>
      <KidsHero/>
      <KidsCategory />
       <Routes>
        <Route path=":category" element={<KidsProduct/>} />
      </Routes>
    </div>
  )
}

export default Kids
