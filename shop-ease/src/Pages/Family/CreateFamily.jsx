import React, { useContext, useState } from "react";
import "../../Components/Family/Family.css";
import { FamilyContext } from "../../Context/FamilyContext";
import InviteCode from "../../Components/Family/InviteCode";

const CreateFamily = () => {
  const { createFamily } = useContext(FamilyContext);

  const [familyName, setFamilyName] = useState("");
  const [family, setFamily] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!familyName.trim()) {
      alert("Please Enter Family Name");
      return;
    }

    const data = await createFamily(familyName);

    if (data && data.family) {
      setFamily(data.family);
      setFamilyName("");
    }
  };

  return (
    <div className="family-container">

      <h1 className="family-title">Create Family</h1>

      <div className="family-card">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="family-input"
            placeholder="Enter Family Name"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />

          <button
            type="submit"
            className="family-btn"
          >
            Create Family
          </button>

        </form>

      </div>

      {family && (
        <InviteCode inviteCode={family.inviteCode} />
      )}

    </div>
  );
};

export default CreateFamily;