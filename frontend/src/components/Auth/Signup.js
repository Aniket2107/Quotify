import React, { useState } from "react";
import { signupHelper } from "./helper";
import { Link } from "react-router-dom";
import "../../assets/styles/accounts.css";
// Styles

const formContainerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
};

const formStyle = {
  width: "500px",
  maxWidth: "500px",
  padding: "40px 20px",
  background: "rgba(0,0,0,.8)",
  boxShadow: "0px 0 20px black",
};

// styles end

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { username, email, password, error, success } = values;

  const handleChange = (username) => (event) => {
    setValues({ ...values, error: false, [username]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signupHelper({ username, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            username: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(() => console.log("Error in signup"));
  };

  const signupform = () => {
    return (
      <div className="row">
        <div className="col-md-12 text-left">
          <br />
          <form>
            <div className="form-group">
              <label className="text-white">Username</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange("username")}
                value={username}
              />
            </div>
            <div className="form-group">
              <label className="text-white">Email</label>
              <input
                className="form-control"
                type="email"
                onChange={handleChange("email")}
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-white">Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange("password")}
                value={password}
              />
            </div>
            <br />
            <button
              onClick={onSubmit}
              className="btn btn-outline-dark btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-12 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-12 text-left">
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
  const SignUpHeading = () => {
    return (
      <div className="row">
        <div className="col-md-12 text-left">
          <h1>Sign Up</h1>
          <br />
        </div>
      </div>
    );
  };

  return (
    <div className="form-container" style={formContainerStyle}>
      <div style={formStyle} className="form">
        {SignUpHeading()}
        {errorMessage()}
        {successMessage()}
        {signupform()}
      </div>
    </div>
  );
};

export default SignUp;
