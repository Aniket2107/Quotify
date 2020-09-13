import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCategories, deleteCategory } from "./helper";
import { isAuthenticated } from "../Auth/helper";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState({
    error: false,
    success: false,
  });

  const { error, success } = msg;
  const { user, token } = isAuthenticated();

  const preload = () => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    preload();
  }, [categories]);

  const removeCategory = (catId) => {
    deleteCategory(user._id, token, catId).then((data) => {
      if (data.error) {
        setMsg({ ...msg, error: true });
      } else {
        setMsg({ ...msg, success: true });
      }
    });
  };

  const goBack = () => {
    return (
      <Link to="/admin/profile" className="btn btn-dark">
        Admin Dashboard
      </Link>
    );
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center">Welcome Admin</h2>
      <p className="text-center">Manage category here</p>
      {/* Design a delete successful msg */}
      <div className="container">
        {goBack()}
        <br /> <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Background</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, idx) => {
              return (
                <tr key={category._id}>
                  <td>{idx + 1}</td>
                  <td>{category.categoryName}</td>
                  <td>{category.background}</td>
                  <td>
                    <Link
                      to={`/admin/edit/category/${category._id}`}
                      className="text-info"
                    >
                      Edit
                    </Link>
                    |
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => removeCategory(category._id)}
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

export default ManageCategory;
