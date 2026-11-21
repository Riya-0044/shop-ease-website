


    import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LoginSigup.css";
import { AuthContext } from "../Context/AuthContext";

const Loginsignup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, signup, isAuthenticated } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(location.pathname !== "/signup");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setIsLogin(location.pathname !== "/signup");
    setError("");
  }, [location.pathname]);

  useEffect(() => {
    if (isAuthenticated) {
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, navigate, location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const validate = () => {
    if (!isLogin && !formData.name.trim()) {
      return "Please enter your name";
    }
    if (!formData.email.trim()) {
      return "Please enter your email address";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address";
    }
    if (!formData.password) {
      return "Please enter your password";
    }
    if (!isLogin && formData.password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    setError("");

    const result = isLogin
      ? await login(formData.email.trim(), formData.password)
      : await signup(formData.name.trim(), formData.email.trim(), formData.password);

    setSubmitting(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setFormData({ name: "", email: "", password: "" });

    const redirectTo = location.state?.from || "/";
    navigate(redirectTo, { replace: true });
  };

  const switchTab = () => {
    setError("");
    setFormData({ name: "", email: "", password: "" });
    navigate(isLogin ? "/signup" : "/login");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">

        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        {error && <div className="loginsignup-error">{error}</div>}

        <div className="loginsignup-fields">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

        </div>

        <button onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Please wait..." : isLogin ? "Login" : "Continue"}
        </button>

        <p className="loginsignup-login">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}

          <span onClick={switchTab} style={{ cursor: "pointer" }}>
            {isLogin ? "Sign Up" : "Login here"}
          </span>
        </p>

        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>
              By continuing, I agree to the terms of use &
              privacy policy.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Loginsignup;




