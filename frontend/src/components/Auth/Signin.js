import React, { useState } from "react";
import { signin, authenticate, isAuthenticated } from "./helper";
import { Redirect, Link } from "react-router-dom";
import '../../assets/styles/accounts.css';
// Styles

const formContainerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto'
}

const formStyle = {
  width:'500px',
  maxWidth: '500px',
  padding: '40px 20px',
  background: 'rgba(0,0,0,.8)',
  boxShadow: '0px 0 20px black'
}

// styles end

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
      <div className="">
        Not a user? <Link to="/signup" className='text-info'>Signup here</Link>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-12 text-left">
          <h1>Sign In</h1>
          <br/>
          <form>
            <div className="form-group">
              <label className="text-white">Username</label>
              <input
                onChange={handleChange("username")}
                value={username}
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group">
              <label className="text-white">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <br/>
            <button onClick={onSubmit} className="btn btn-outline-dark btn-block">
              Submit
            </button>
            <br/>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="form-container" style={formContainerStyle}>
      <div style={formStyle}>
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {notaUser()}
        {performRedirect()}
      </div>
    </div>
  );
};

export default Signin;
