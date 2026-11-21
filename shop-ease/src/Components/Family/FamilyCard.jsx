import React from "react";
import "./Family.css";

const FamilyCard = ({ family }) => {
  return (
    <div className="family-card">
      <h2>{family.familyName}</h2>

      <p>
        <strong>Invite Code:</strong> {family.inviteCode}
      </p>

      <p>
        <strong>Admin:</strong> {family.admin?.name}
      </p>

      <p>
        <strong>Total Members:</strong> {family.members?.length}
      </p>

      <div className="family-members">
        <h3>Members</h3>

        {family.members?.map((member) => (
          <div key={member._id} className="family-member">
            👤 {member.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyCard;