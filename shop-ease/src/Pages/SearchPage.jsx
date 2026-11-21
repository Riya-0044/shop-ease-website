import React from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../Components/Item/Item";

import mensproduct from "../Components/Assets/mensproduct";
import womensproduct from "../Components/Assets/womensproduct";
import kidsproduct from "../Components/Assets/kidsproduct";
import furnitureproduct from "../Components/Assets/furnitureproduct";
import electronicproduct from "../Components/Assets/electronicproduct";
import beautyproduct from "../Components/Assets/beautyproduct";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const allProducts = [
    ...mensproduct,
    ...womensproduct,
    ...kidsproduct,
    ...furnitureproduct,
    ...electronicproduct,
    ...beautyproduct,
  ];

  const filteredProducts = allProducts.filter((item) => {
    if (query === "mens") {
      return mensproduct.includes(item);
    }

    if (query === "womens") {
      return womensproduct.includes(item);
    }

    if (query === "kids") {
      return kidsproduct.includes(item);
    }

    if (query === "furniture") {
      return furnitureproduct.includes(item);
    }

    if (query === "electronic") {
      return electronicproduct.includes(item);
    }

     if (query === "beauty") {
      return beautyproduct.includes(item);
    }

    return (
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query)
    );
  });

  return (
    <div style={{ padding: "30px" }}>
      <h2>Search Results for "{query}"</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          {filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;