import React from "react";
import Searchbox from "../Components/SearchBox/Searchbox";
import Hero from "../Components/Herobanner/Hero";
import MostLoved from "../Components/MostLoved/MostLoved";
import Offer from "../Components/Offer/Offer";
import Offerproduct from "../Components/Offerproduct/Offerproduct";

const Shop = () => {
  return (
    <div>
      <Searchbox />
      <Hero />
      <MostLoved />
      <Offer />
      <Offerproduct />
    </div>
  );
};

export default Shop;