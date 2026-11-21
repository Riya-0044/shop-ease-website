import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import ProductList from "./Components/Pages/ProductList/ProductList";
import Orders from "./Components/Pages/Orders/Orders";
import Login from "./Components/Pages/Login/Login";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Families from "./Components/Pages/Families/Families";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-container">
        <Sidebar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-product/:id" element={<AddProduct />} />

            <Route path="/product-list" element={<ProductList />} />

            <Route path="/orders" element={<Orders />} />

            <Route path="/families" element={<Families />} />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;