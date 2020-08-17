import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "./helper";
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
        console.log(res);
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

  const DisplayCatgory = () => {
    categories.map((category) => {
      return (
        <tr key={category._id}>
          <td>{category.categoryName}</td>
          <td>{category.background}</td>
          <td>
            <Link to={`/edit/category/${category._id}`} className="text-info">
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
    });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center">Welcome Admin</h2>
      <p className="text-center">Manage category here</p>
      {/* Design a delete successful msg */}
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Category Name</th>
            <th>Background</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{DisplayCatgory()}</tbody>
      </table>
    </div>
  );
};

export default ManageCategory;
