import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth/helper";

const adminDashboard = () => {
  const { user } = isAuthenticated();

  console.log();

  const leftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/admin/manage/categories"
              className="nav-link text-success"
            >
              Manage Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/manage/quotes" className="nav-link text-success">
              Manage quotes
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/manage/users" className="nav-link text-success">
              Users
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const rightSide = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2 ">Username:</span>
            {user.username}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2 ">Email:</span>
            {user.email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger">Admin area</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="text-center">Welcome Admin</h2>
      <p className="text-center">Manage your app here</p>
      <div className="row">
        <div className="col-md-3 col-10">{leftSide()}</div>
        <div className="col-md-8 col-10">{rightSide()}</div>
      </div>
    </div>
  );
};

export default adminDashboard;
