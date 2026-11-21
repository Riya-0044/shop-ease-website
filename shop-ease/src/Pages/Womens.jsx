import React from "react";
import { Routes, Route } from "react-router-dom";


import WomensHero from "../Components/Womens/WomensHero";
import WomensCategory from "../Components/Womens/WomensCategory";
import WomensProduct from "../Components/Womens/WomensProduct";

const Womens = () => {
  return (
    <>
      <WomensHero />
      <WomensCategory />

      <Routes>
        <Route path=":category" element={<WomensProduct />} />
      </Routes>
    </>
  );
};

export default Womens;