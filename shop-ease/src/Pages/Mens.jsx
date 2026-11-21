import React from "react";
import { Routes, Route, UNSAFE_RouteContext } from "react-router-dom";

import MensHero from "../Components/MensHero/MensHero";
import Menscategory from "../Components/Menscategory/Menscategory";
import Tshirt from "../Components/Menspage/Tshirt";
import Jeans from "../Components/Menspage/Jeans";
import Shoes from "../Components/Menspage/Shoes";
import Watches from "../Components/Menspage/Watches";
import SportWear from "../Components/Menspage/SportWear";
import FormalWear from "../Components/Menspage/FormalWear";

const Mens = () => {
  return (
    <>
      <MensHero />
      <Menscategory />

      <Routes>
        <Route path="tshirts" element={<Tshirt />} />
        <Route path="jeans" element={<Jeans />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="watches" element={<Watches/> } />
        <Route path="sportswear" element={<SportWear/>}/>
        <Route path="formalwear" element={<FormalWear/>}/>

      </Routes>
    </>
  );
};

export default Mens;