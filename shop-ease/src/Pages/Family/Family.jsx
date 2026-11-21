import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Components/Family/Family.css";

import { FamilyContext } from "../../Context/FamilyContext";
import FamilyCard from "../../Components/Family/FamilyCard";

const Family = () => {
  const navigate = useNavigate();

  const {
    family,
    getFamily,
  } = useContext(FamilyContext);

  useEffect(() => {
    const familyId = localStorage.getItem("familyId");

    if (familyId) {
      getFamily(familyId);
    }
  }, []);

  return (
    <div className="family-container">
      <h1 className="family-title">
         Joint Family Shopping
      </h1>

      <p className="family-subtitle">
        Shop together with your family using one shared cart.
      </p>

      {!family ? (
        <div className="family-options">

          <div className="family-card">
            <h2>Create Family</h2>

            <p>
              Create a new family and invite members using an
              invite code.
            </p>

            <button
              className="family-btn"
              onClick={() => navigate("/family/create")}
            >
              Create Family
            </button>
          </div>

          <div className="family-card">
            <h2>Join Family</h2>

            <p>
              Already have an invite code? Join your family.
            </p>

            <button
              className="family-btn"
              onClick={() => navigate("/family/join")}
            >
              Join Family
            </button>
          </div>

        </div>
      ) : (
        <>
          <FamilyCard
            family={family}
            onOpen={() =>
              navigate(`/family/cart/${family._id}`)
            }
          />

          <div className="family-options">

            <button
              className="family-btn"
              onClick={() =>
                navigate(`/family/members/${family._id}`)
              }
            >
              View Members
            </button>

            <button
              className="family-btn"
              onClick={() =>
                navigate(`/family/orders/${family._id}`)
              }
            >
              View Orders
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Family;