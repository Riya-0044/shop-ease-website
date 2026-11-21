import React, { useEffect, useState } from "react";
import "./ProductList.css";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";


const ProductList = () => {

    const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product Deleted Successfully");
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>

      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
  src={`http://localhost:5000${item.image}`}
  alt={item.name}
  className="product-image"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/60";
  }}
/>
                </td>

                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>
                <td>{item.stock}</td>

                <td>
                  <button
  className="edit-btn"
  onClick={() => navigate(`/add-product/${item._id}`)}
>
  Edit
</button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Products Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;