import React from "react";
import "./Family.css";

const FamilyMemberCard = ({ member }) => {
  return (
    <div className="family-member-card">
      <div className="member-avatar">
        {member.name.charAt(0).toUpperCase()}
      </div>

      <div className="member-details">
        <h3>{member.name}</h3>
        <p>{member.email}</p>

        {member.role === "Admin" ? (
          <span className="admin-badge">Family Admin</span>
        ) : (
          <span className="member-badge">Member</span>
        )}
      </div>
    </div>
  );
};

export default FamilyMemberCard;