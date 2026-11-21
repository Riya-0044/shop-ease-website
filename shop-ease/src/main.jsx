/*import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import ShopContextProvider from "./Context/ShopContext.jsx";
import FamilyContextProvider from "./Context/FamilyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <FamilyContextProvider>
          <App />
        </FamilyContextProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import ShopContextProvider from "./Context/ShopContext.jsx";
import FamilyContextProvider from "./Context/FamilyContext.jsx";
import AuthContextProvider from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ShopContextProvider>
          <FamilyContextProvider>
            <App />
          </FamilyContextProvider>
        </ShopContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);