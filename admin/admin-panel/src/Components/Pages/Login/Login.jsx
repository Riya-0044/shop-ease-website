import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Admin Login</h1>

        <form className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;