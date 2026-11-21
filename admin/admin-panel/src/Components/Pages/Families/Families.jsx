
import React, { useEffect, useState } from "react";
import "./Families.css";
import API from "../../services/api";

const Families = () => {
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    getFamilies();
  }, []);

  const getFamilies = async () => {
    try {
      const res = await API.get("/family");
      setFamilies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFamily = async (id) => {
    if (!window.confirm("Delete this family?")) return;

    try {
      await API.delete(`/family/${id}`);
      getFamilies();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="families">
      <h1>Joint Families</h1>

      <table className="family-table">
        <thead>
          <tr>
            <th>Family Name</th>
            <th>Invite Code</th>
            <th>Admin</th>
            <th>Total Members</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {families.map((family) => (
            <tr key={family._id}>
              <td>{family.familyName}</td>

              <td>{family.inviteCode}</td>

              <td>{family.admin?.name}</td>

              <td>{family.members?.length}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteFamily(family._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {families.length === 0 && (
            <tr>
              <td colSpan="5">No Family Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Families;