import React from 'react'
import { Routes, Route } from "react-router-dom";
import ElectronicHero from '../Components/Electronic/ElectronicHero'
import HardwareCategory from '../Components/Electronic/HardwareCategory'
import HardwareProduct from '../Components/Electronic/HardwareProduct'

const Devices = () => {
  return (
    <div>
      <ElectronicHero/>
      <HardwareCategory/>
      <Routes>
        <Route path=":category" element={<HardwareProduct/>} />
      </Routes>
    </div>
  )
}

export default Devices
