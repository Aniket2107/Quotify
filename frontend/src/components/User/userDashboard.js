import React from "react";
import { Link } from "react-router-dom";

const userDashboard = () => {
  return (
    <div className="text-center" style={{ marginTop: "100px" }}>
      <h1>Welcome User!</h1>
      <Link to="/create/quote">
        <buton className="btn">Add Quote</buton>
        <p>Update user isAdult favourites interests </p>
      </Link>
    </div>
  );
};

export default userDashboard;
