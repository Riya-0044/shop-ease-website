

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../Components/Family/Family.css";
import { FamilyContext } from "../../Context/FamilyContext";

const JoinFamily = () => {
  const navigate = useNavigate();

  const { joinFamily } = useContext(FamilyContext);

  const [inviteCode, setInviteCode] = useState("");

  const handleJoin = async (e) => {
    e.preventDefault();

    if (!inviteCode.trim()) {
      alert("Please enter Invite Code");
      return;
    }

    const data = await joinFamily(inviteCode);

    if (data && data.success) {
      localStorage.setItem("familyId", data.family._id);

      alert("Family Joined Successfully");

      navigate("/family");
    } else {
      alert("Invalid Invite Code");
    }
  };

  return (
    <div className="family-container">
      <h1 className="family-title">👨‍👩‍👧‍👦 Join Family</h1>

      <div className="family-card">
        <form onSubmit={handleJoin}>
          <input
            type="text"
            placeholder="Enter Invite Code"
            className="family-input"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
          />

          <button type="submit" className="family-btn">
            Join Family
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinFamily;