import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth/helper";
import { getAllUsers, deleteUser } from "./helper";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const { user, token } = isAuthenticated();

  useEffect(() => {
    preload();
  }, [users]);

  const preload = () => {
    getAllUsers(user._id, token)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log(err));
  };

  const goBack = () => {
    return (
      <Link to="/admin/profile" className="btn btn-dark">
        Admin Dashboard
      </Link>
    );
  };

  const removeUser = (delId) => {
    deleteUser(user._id, token, delId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("deleted");
      }
    });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center">Welcome Admin</h2>
      <p className="text-center">Manage Users here</p>
      {/* Design a delete successful msg */}
      <div className="container">
        {goBack()}
        <br /> <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Adult</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((profile, idx) => {
              return (
                <tr key={profile._id}>
                  <td>{idx + 1}</td>
                  <td>{profile.username}</td>
                  <td>{profile.email}</td>
                  <td>{profile.isAdult ? "Yes" : "No"}</td>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => removeUser(profile._id)}
                      className="text-danger"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
