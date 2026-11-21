
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import API from "../../services/api";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productRes = await API.get(`/products?t=${Date.now()}`);
      const orderRes = await API.get(`/orders?t=${Date.now()}`);
      const userRes = await API.get(`/user?t=${Date.now()}`);

      const productsData = Array.isArray(productRes.data)
        ? productRes.data
        : productRes.data.products || [];

      const ordersData = Array.isArray(orderRes.data)
        ? orderRes.data
        : orderRes.data.orders || [];

      const usersData = Array.isArray(userRes.data)
        ? userRes.data
        : userRes.data.users || userRes.data.data || [];

      setProducts(productsData);
      setOrders(ordersData);
      setUsers(usersData);
    } catch (error) {
      console.log("Error fetching dashboard data:", error);
    }
  };

  // Safe Total Revenue Calculation
  const revenue = Array.isArray(orders)
    ? orders.reduce((total, order) => total + (Number(order.totalPrice) || 0), 0)
    : 0;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Cards Class Name Matching Your CSS */}
      <div className="dashboard-cards">
        <div className="card">
          <h2>{products.length}</h2>
          <p>Total Products</p>
        </div>

        <div className="card">
          <h2>{orders.length}</h2>
          <p>Total Orders</p>
        </div>

        <div className="card">
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div className="card">
          <h2>₹{revenue.toLocaleString()}</h2>
          <p>Total Revenue</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="recent-orders">
        <h2>Recent Orders</h2>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders && orders.length > 0 ? (
              orders.slice(0, 5).map((order) => (
                <tr key={order._id}>
                  <td>{order.user?.name || order.user || "Guest"}</td>
                  <td>
                    {order.products && order.products.length > 0
                      ? order.products
                          .map((item) => item.product?.name || item.name || "Product")
                          .join(", ")
                      : "No Products"}
                  </td>
                  <td>₹{order.totalPrice}</td>
                  <td>{order.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Recent Orders Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;