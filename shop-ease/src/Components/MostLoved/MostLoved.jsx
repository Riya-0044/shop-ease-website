

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MostLoved.css";
import "../Item/Item.css";
import { ShopContext } from "../../Context/ShopContext";

// IDs of products that should appear in the "Most Loved" section
const mostLovedIds = [111, 112, 113, 114, 115, 116];

const MostLoved = () => {
  const { allProducts } = useContext(ShopContext);

  // Products picked by ID instead of category
  const mostLovedProducts = allProducts.filter((item) =>
    mostLovedIds.includes(item.id)
  );

  if (allProducts.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="most-loved">
      <h1>Most Loved Products</h1>
      <hr />

      <div className="most-loved-item">
        {mostLovedProducts.map((item) => (
          <Link
            key={item._id}
            to={`/product/${item._id}`}
            className="most-loved-link"
          >
            <div className="item">
              <img
                src={`http://localhost:5000/${item.image}`}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="item-price">
                <div className="item-price-new">₹{item.new_price}</div>
                <div className="item-price-old">₹{item.old_price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostLoved;