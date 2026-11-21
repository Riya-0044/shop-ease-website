import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Components/Family/Family.css";

import { FamilyContext } from "../../Context/FamilyContext";
import FamilyMemberCard from "../../Components/Family/FamilyMemberCard";

const FamilyMembers = () => {
  const { familyId } = useParams();

  const {
    family,
    getFamily,
    loading,
  } = useContext(FamilyContext);

  useEffect(() => {
    getFamily(familyId);
  }, [familyId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="family-container">

      <h1 className="family-title">
        Family Members
      </h1>

      {family ? (
        <>
          <div className="family-card">
            <h2>{family.familyName}</h2>

            <p>
              <strong>Invite Code:</strong> {family.inviteCode}
            </p>

            <p>
              <strong>Total Members:</strong>{" "}
              {family.members.length}
            </p>
          </div>

          <div className="family-members">
            {family.members.map((member) => (
              <FamilyMemberCard
                key={member._id}
                member={member}
              />
            ))}
          </div>
        </>
      ) : (
        <h3>No Family Found</h3>
      )}

    </div>
  );
};

export default FamilyMembers;