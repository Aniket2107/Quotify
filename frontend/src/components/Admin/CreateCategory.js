import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth/helper";
import { createCategory } from "./helper";

const CreateCategory = () => {
  const [values, Setvalues] = useState({
    categoryName: "",
    background: "",
    error: "",
    success: "",
  });

  const { categoryName, background, error, success } = values;
  const { user, token } = isAuthenticated();

  const onSubmit = (e) => {
    e.preventDefault();

    createCategory(user._id, token, values).then((data) => {
      if (data.error) {
        Setvalues({ ...values, error: data.error });
      } else {
        Setvalues({
          ...values,
          categoryName: "",
          background: "",
          error: "",
          success: "Category created sucessfully..",
        });
      }
    });
  };

  const handleChange = (categoryName) => (event) => {
    Setvalues({
      ...values,
      error: false,
      success: "",
      [categoryName]: event.target.value,
    });
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
            style={{ display: success ? "" : "none" }}
          >
            {success}
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
      <p className="text-center">Create category here</p>
      {/* design a error and success msg */}
      {errorMessage()}
      {successMessage()}
      {categoryForm()}
    </div>
  );
};

export default CreateCategory;
