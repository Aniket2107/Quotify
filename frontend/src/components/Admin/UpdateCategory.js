import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../Auth/helper";
import { updateCategory, getCategoryById } from "./helper";
import { Link } from "react-router-dom";

const UpdateCategory = ({ match }) => {
  const [values, setValues] = useState({
    categoryName: "",
    background: "",
    error: "",
    success: "",
  });
  const [updated, setUpdated] = useState("");

  const { categoryName, background, error, success } = values;
  const { user, token } = isAuthenticated();

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const preload = (categoryId) => {
    getCategoryById(categoryId)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            categoryName: data.categoryName,
            background: data.background,
            error: "",
            success: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (categoryName) => (event) => {
    setValues({
      ...values,
      error: false,
      success: "",
      [categoryName]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateCategory(user._id, token, match.params.categoryId, values).then(
      (data) => {
        if (data.error) {
          setUpdated("Error updating category");
        } else {
          setUpdated("Category updated sucessfully..");
        }
      }
    );
  };

  const categoryForm = () => {
    return (
      <div className="container">
        {goBack()}
        <br />
        <br />
        <form>
          <div className="form-group">
            <label className="text-dark">Category Name: </label>
            <input
              onChange={handleChange("categoryName")}
              value={categoryName}
              className="form-control"
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="text-dark">Background color</label>
            <input
              onChange={handleChange("background")}
              value={background}
              className="form-control"
              type="text"
            />
          </div>
          <br />
          <button onClick={onSubmit} className="btn btn-outline-dark btn-block">
            Submit
          </button>
          <br />
        </form>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: updated ? "" : "none" }}
          >
            {updated}
          </div>
        </div>
      </div>
    );
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
      <p className="text-center">Update category here</p>
      {/* design a error and success msg */}
      {errorMessage()}
      {successMessage()}
      {categoryForm()}
    </div>
  );
};

export default UpdateCategory;
