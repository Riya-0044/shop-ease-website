import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbox.css";

const Searchbox = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

 /* const handleSearch = () => {
    const value = search.toLowerCase().trim();

   if (value.includes("mens") && value.includes("tshirt")) {
      navigate("/mens/tshirts");
    } else if (value.includes("mens") && value.includes("jeans")) {
      navigate("/mens/jeans");
    } else if (value.includes("mens") && value.includes("shoes")) {
      navigate("/mens/shoes");
    } else if (value.includes("mens") && value.includes("watches")) {
      navigate("/mens/watches");
    } else if (value.includes("mens") && value.includes("hoodies")) {
      navigate("/mens/hoodies");
    } else {
      alert("Product not found");
    }
  };*/


  const handleSearch = () => {
  if (search.trim() !== "") {
    navigate(`/search?q=${search}`);
  }
};

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for products, brands and more..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbox;