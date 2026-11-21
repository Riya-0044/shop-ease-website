/*import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <div className="item-prices">
        <div className="item-price-new">
          ₹{props.new_price}
        </div>

        <div className="item-price-old">
          ₹{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;*/

/*import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <div className="item-price">
        <div className="item-price-new">
          ₹{props.new_price}
        </div>

        <div className="item-price-old">
          ₹{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;*/

import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  return (
    <Link
      to={`/product/${props._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="item">
        <img
          src={
            props.image?.startsWith("http") || props.image?.startsWith("/")
              ? props.image
              : `http://localhost:5000/${props.image}`
          }
          alt={props.name}
        />

        <h3>{props.name}</h3>

        <p>{props.description}</p>

        <div className="item-price">
          <div className="item-price-new">
            ₹{props.new_price}
          </div>

          <div className="item-price-old">
            ₹{props.old_price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;