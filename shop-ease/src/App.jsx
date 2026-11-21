/*import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

// Existing Pages
import Shop from "./Pages/Shop";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Decro from "./Pages/Decro";
import Devices from "./Pages/Devices";
import Beauty from "./Pages/Beauty";
import SearchPage from "./Pages/SearchPage";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ProductDetails from "./Pages/ProductDetails";

// Family Pages
import Family from "./Pages/Family/Family";
import CreateFamily from "./Pages/Family/CreateFamily";
import JoinFamily from "./Pages/Family/JoinFamily";
import FamilyMembers from "./Pages/Family/FamilyMembers";
import FamilyCart from "./Pages/Family/FamilyCart";
import FamilyOrders from "./Pages/Family/FamilyOrders";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
      
        <Route path="/" element={<Shop />} />


        <Route path="/mens/*" element={<Mens />} />
        <Route path="/womens/*" element={<Womens />} />
        <Route path="/kids/*" element={<Kids />} />
        <Route path="/furniture/*" element={<Decro />} />
        <Route path="/electronics/*" element={<Devices />} />
        <Route path="/beauty/*" element={<Beauty />} />

      
        <Route path="/search" element={<SearchPage />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        
        <Route path="/cart" element={<Cart />} />

       
        <Route path="/login" element={<LoginSignup />} />


        <Route path="/family" element={<Family />} />
        <Route path="/family/create" element={<CreateFamily />} />
        <Route path="/family/join" element={<JoinFamily />} />
        <Route
          path="/family/members/:familyId"
          element={<FamilyMembers />}
        />
        <Route
          path="/family/cart/:familyId"
          element={<FamilyCart />}
        />
        <Route
          path="/family/orders/:familyId"
          element={<FamilyOrders />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;*/

/*import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import Shop from "./Pages/Shop";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Decro from "./Pages/Decro";
import Devices from "./Pages/Devices";
import Beauty from "./Pages/Beauty";
import SearchPage from "./Pages/SearchPage";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ProductDetails from "./Pages/ProductDetails";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";


import Family from "./Pages/Family/Family";
import CreateFamily from "./Pages/Family/CreateFamily";
import JoinFamily from "./Pages/Family/JoinFamily";
import FamilyMembers from "./Pages/Family/FamilyMembers";
import FamilyCart from "./Pages/Family/FamilyCart";
import FamilyOrders from "./Pages/Family/FamilyOrders";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>

        <Route path="/" element={<Shop />} />


        <Route path="/mens/*" element={<Mens />} />
        <Route path="/womens/*" element={<Womens />} />
        <Route path="/kids/*" element={<Kids />} />
        <Route path="/furniture/*" element={<Decro />} />
        <Route path="/electronics/*" element={<Devices />} />
        <Route path="/beauty/*" element={<Beauty />} />


        <Route path="/search" element={<SearchPage />} />


        <Route path="/product/:id" element={<ProductDetails />} />


        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />


        <Route
          path="/family"
          element={
            <ProtectedRoute>
              <Family />
            </ProtectedRoute>
          }
        />
        <Route
          path="/family/create"
          element={
            <ProtectedRoute>
              <CreateFamily />
            </ProtectedRoute>
          }
        />
        <Route
          path="/family/join"
          element={
            <ProtectedRoute>
              <JoinFamily />
            </ProtectedRoute>
          }
        />
        <Route
          path="/family/members/:familyId"
          element={
            <ProtectedRoute>
              <FamilyMembers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/family/cart/:familyId"
          element={
            <ProtectedRoute>
              <FamilyCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/family/orders/:familyId"
          element={
            <ProtectedRoute>
              <FamilyOrders />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;*/

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import Shop from "./Pages/Shop";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Decro from "./Pages/Decro";
import Devices from "./Pages/Devices";
import Beauty from "./Pages/Beauty";
import SearchPage from "./Pages/SearchPage";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ProductDetails from "./Pages/ProductDetails";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

import Family from "./Pages/Family/Family";
import CreateFamily from "./Pages/Family/CreateFamily";
import JoinFamily from "./Pages/Family/JoinFamily";
import FamilyMembers from "./Pages/Family/FamilyMembers";
import FamilyCart from "./Pages/Family/FamilyCart";
import FamilyOrders from "./Pages/Family/FamilyOrders";

import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Navbar />

        <Routes>

          <Route path="/" element={<Shop />} />


          <Route path="/mens/*" element={<Mens />} />
          <Route path="/womens/*" element={<Womens />} />
          <Route path="/kids/*" element={<Kids />} />
          <Route path="/furniture/*" element={<Decro />} />
          <Route path="/electronics/*" element={<Devices />} />
          <Route path="/beauty/*" element={<Beauty />} />


          <Route path="/search" element={<SearchPage />} />


          <Route path="/product/:id" element={<ProductDetails />} />


          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />


          <Route
            path="/family"
            element={
              <ProtectedRoute>
                <Family />
              </ProtectedRoute>
            }
          />
          <Route
            path="/family/create"
            element={
              <ProtectedRoute>
                <CreateFamily />
              </ProtectedRoute>
            }
          />
          <Route
            path="/family/join"
            element={
              <ProtectedRoute>
                <JoinFamily />
              </ProtectedRoute>
            }
          />
          <Route
            path="/family/members/:familyId"
            element={
              <ProtectedRoute>
                <FamilyMembers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/family/cart/:familyId"
            element={
              <ProtectedRoute>
                <FamilyCart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/family/orders/:familyId"
            element={
              <ProtectedRoute>
                <FamilyOrders />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;