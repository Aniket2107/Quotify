import React, { useState } from "react";
import { signin, authenticate, isAuthenticated } from "./helper";
import { Redirect, Link } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { username, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (username) => (event) => {
    setValues({ ...values, error: false, [username]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ username, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  //Todo
  //Todo Redirefction acc:----

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/profile" />;
      } else {
        return <Redirect to="/user/profile" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const notaUser = () => {
    return (
      <div className="alert alert-info">
        Not a user?
        <Link to="/signup">Signup here</Link>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Username</label>
              <input
                onChange={handleChange("username")}
                value={username}
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="contaier">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {notaUser()}
      {performRedirect()}

      <p className="text-dark text-center">{JSON.stringify(values)}</p>
    </div>
  );
};

export default Signin;
