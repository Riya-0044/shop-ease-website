import React, { useEffect, useState } from "react";
import "./Orders.css";
import API from "../../services/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      // Backend response res.data.orders me array bhej raha hai
      setOrders(res.data.orders || []);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/orders/update/${id}`, { status });

      alert("Status Updated");

      fetchOrders();
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  return (
    <div className="orders">
      <h1>Orders</h1>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id ? order._id.slice(-6) : "N/A"}</td>

                <td>{order.user?.name || "Guest / Deleted"}</td>

                <td>
                  {order.products && order.products.length > 0
                    ? order.products
                        .map((item) => item.product?.name || item.name || "Product")
                        .join(", ")
                    : "No Products"}
                </td>

                <td>₹{order.totalPrice}</td>

                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order._id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Orders Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;