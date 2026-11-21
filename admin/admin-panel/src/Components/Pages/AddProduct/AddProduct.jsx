import React, { useState } from "react";
import "./AddProduct.css";
import upload from "../../../Components/Assets/upload.jpg";
import API from "../../services/api";

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "Men",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("stock", product.stock);

      if (image) {
        formData.append("image", image);
      }

      const token = localStorage.getItem("token");

      await API.post("/products/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product Added Successfully!");

      setProduct({
        name: "",
        description: "",
        price: "",
        category: "Men",
        stock: "",
      });

      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };
  return (
    <form className="add-product" onSubmit={handleSubmit}>
      <h1>Add Product</h1>

      <div className="addproduct-itemfield">
        <p>Product Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea
          name="description"
          placeholder="Enter Product Description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Price</p>
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Stock</p>
        <input
          type="number"
          name="stock"
          placeholder="Enter Stock"
          value={product.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Category</p>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Beauty">Beauty</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload}
            alt="Upload"
            className="addproduct-thumbnail-img"
          />
        </label>

        <input
          type="file"
          id="file-input"
          accept="image/*"
          hidden
          onChange={handleImage}
        />
      </div>

      <button type="submit" className="addproduct-btn">
        ADD PRODUCT
      </button>
    </form>
  );
};

export default AddProduct;






