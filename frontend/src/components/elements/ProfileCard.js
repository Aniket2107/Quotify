import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { isAuthenticated } from "../Auth/helper";
import { updateUser } from "../User/helper";

const { user, token } = isAuthenticated();

const editBtnStyle = {
  margin: "0",
  position: "absolute",
  top: "20px",
  right: "50px",
};

function ProfileCard(props) {
  const [editStatus, setEditStatus] = useState(false);

  const [userBody, setUserBody] = useState({
    username: isAuthenticated() ? isAuthenticated().user.username : "",
    email: isAuthenticated() ? isAuthenticated().user.email : "",
    isAdult: false,
    loading: false,
    error: "",
    success: "",
  });

  const { username, isAdult, email, loading, error, success } = userBody;

  const onEdit = (event) => {
    event.preventDefault();
    setUserBody({ ...userBody, loading: true });
    updateUser(user._id, token, userBody).then((data) => {
      if (data.error) {
        setUserBody({
          ...userBody,
          error: data.error,
          success: "",
          loading: false,
        });
      } else {
        setUserBody({
          ...userBody,
          error: "",
          success: "Profile updated sucessfully",
          loading: false,
        });
      }
    });
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-12 text-left">
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

  return (
    <div
      className="card"
      style={{
        background: "#333",
        color: "white",
        transition: "all .5s ease-in-out",
      }}
    >
      <div className="row d-flex justify-content-center align-items-center">
        <div
          className="col-md-3 d-flex justify-content-center align-items-center"
          style={{ margin: "20px 0" }}
        >
          <Avatar
            alt="Cindy Baker"
            style={{ height: "120px", width: "120px" }}
          />
        </div>
        <div
          className="col-md-9 d-flex align-items-start flex-column"
          style={{ textAlign: "start", margin: " 20px 0", padding: "10px" }}
        >
          {successMessage()}
          {errorMessage()}
          <div style={{ width: "80%", padding: "10px" }}>
            <h4>
              <span>Username: </span>
              <br />
              {editStatus ? (
                <input
                  type="text"
                  className="form-control"
                  style={{
                    width: "100%",
                    margin: 0,
                    fontSize: "20px",
                    border: "none",
                    borderBottom: "1px solid white",
                    background: "rgba(255,255,255,.1)",
                    color: "white",
                    borderRadius: "0px",
                  }}
                  onChange={(e) => {
                    setUserBody({
                      ...userBody,
                      username: e.target.value,
                      success: "",
                    });
                  }}
                  value={username}
                />
              ) : (
                <>{username}</>
              )}
            </h4>
          </div>

          <div style={{ width: "80%", padding: "10px" }}>
            <h4>
              <span>Email</span>
              <br />
              {email}
            </h4>
          </div>

          <button
            className="btn btn-outline-info edit-user-btn"
            style={editBtnStyle}
            onClick={() => {
              setEditStatus(!editStatus);
              setUserBody({ ...userBody, success: "", error: "", loading: "" });
            }}
          >
            {editStatus ? "Cancel" : "Edit"}
          </button>

          {editStatus ? (
            <div style={{ width: "80%", padding: "10px" }}>
              <h4>
                Are you an adult? &nbsp;
                <Switch
                  checked={isAdult}
                  onChange={(e) => {
                    setUserBody({ ...userBody, isAdult: e.target.checked });
                  }}
                  name="is-adult"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </h4>
            </div>
          ) : null}

          {/* {editStatus ? <ConfirmPassword /> : null} */}
          {editStatus ? (
            <div style={{ width: "80%", padding: "10px" }}>
              <button className="btn btn-outline-success" onClick={onEdit}>
                Save
              </button>{" "}
              <button className="btn btn-outline-danger">Cancel</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ConfirmPassword() {
  return (
    <div style={{ width: "80%", padding: "10px" }}>
      <h4>
        <label>Confirm Password*</label>
        <input
          type="password"
          className="form-control"
          name=""
          id="pass"
          placeholder=""
          required
        />
      </h4>
    </div>
  );
}

export default ProfileCard;
