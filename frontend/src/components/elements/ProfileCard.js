import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { isAuthenticated } from "../Auth/helper";
import { updateUser } from "../User/helper";

const { user, token } = isAuthenticated;

const editBtnStyle = {
  margin: "0",
  position: "absolute",
  top: "20px",
  right: "50px",
};

function ProfileCard(props) {
  const [editStatus, setEditStatus] = useState(false);

  const [userBody, setUserBody] = useState({
    username: "",
    password: "",
    isAdult: false,
    loading: false,
  });

  const onEdit = (event) => {
    event.preventDefault();
    setUserBody({ ...userBody, loading: true });
    updateUser(props.user._id, token, userBody).then(() => {
      setUserBody({
        ...userBody,
      });
    });
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
          <div style={{ width: "80%", padding: "10px" }}>
            <h4>
              <span>Name:</span>
              <br />
              {editStatus ? (
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "100%", margin: 0, fontSize: "20px" }}
                  onChange={(e) => {
                    setUserBody({ ...userBody, username: e.target.value });
                  }}
                  value={userBody.username || props.user.username}
                />
              ) : (
                <>{userBody.username || props.user.username}</>
              )}
            </h4>
          </div>

          <div style={{ width: "80%", padding: "10px" }}>
            <h4>
              <span>Email</span>
              <br />
              {props.user.email}
            </h4>
          </div>

          <button
            className="btn btn-outline-info edit-user-btn"
            style={editBtnStyle}
            onClick={() => setEditStatus(!editStatus)}
          >
            {editStatus ? "Cancel" : "Edit"}
          </button>

          {editStatus ? (
            <div style={{ width: "80%", padding: "10px" }}>
              <h4>
                Are you an adult? &nbsp;
                <Switch
                  checked={userBody.isAdult || props.user.isAdult}
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
