import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
          color: "#e53935",
          marginBottom: "10px",
        }}
      >
        404
      </h1>

      <h2
        style={{
          color: "#333",
          marginBottom: "10px",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "20px",
        }}
      >
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          background: "#e53935",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "8px",
        }}
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;