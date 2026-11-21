import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import "../../Components/Family/Family.css";

const FamilyOrders = () => {
  const { familyId } = useParams();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get(`/orders/family/${familyId}`);
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="family-container">

      <h1 className="family-title">
        Family Orders
      </h1>

      {orders.length > 0 ? (
        orders.map((order) => (
          <div className="family-card" key={order._id}>

            <h3>Order ID : {order._id.slice(-6)}</h3>

            <p>
              <strong>Status :</strong> {order.status}
            </p>

            <p>
              <strong>Total :</strong> ₹{order.totalPrice}
            </p>

            <h4>Products</h4>

            {order.products.map((item) => (
              <div
                className="family-product"
                key={item._id}
              >
                <img
                  src={`http://localhost:5000${item.product.image}`}
                  alt={item.product.name}
                />

                <div className="family-product-details">
                  <h4>{item.product.name}</h4>

                  <p>Quantity : {item.quantity}</p>

                  <p>
                    Added By : {item.addedBy?.name}
                  </p>
                </div>
              </div>
            ))}

          </div>
        ))
      ) : (
        <h2>No Family Orders Found</h2>
      )}

    </div>
  );
};

export default FamilyOrders;