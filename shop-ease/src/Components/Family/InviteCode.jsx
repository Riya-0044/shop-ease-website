import React from "react";
import "./Family.css";

const InviteCode = ({ inviteCode }) => {

  const copyCode = () => {
    navigator.clipboard.writeText(inviteCode);
    alert("Invite Code Copied");
  };

  return (
    <div className="invite-card">

      <h2>Family Invite Code</h2>

      <div className="invite-box">
        <h3>{inviteCode}</h3>

        <button
          className="copy-btn"
          onClick={copyCode}
        >
          Copy
        </button>
      </div>

      <p>
        Share this code with your family members to join your Family Cart.
      </p>

    </div>
  );
};

export default InviteCode;