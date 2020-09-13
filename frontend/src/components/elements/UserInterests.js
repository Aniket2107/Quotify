import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../Auth/helper";
import { getUserCred } from "../User/helper";

function UserInterests() {
  const [interests, setInterests] = useState({});

  const { user, token } = isAuthenticated();

  useEffect(() => {
    setInterests(getUserCred(user._id, token));
    console.log(interests);
  }, []);

  return (
    <div className="text-white">
      User interests...
      {interests.username}
      {interests.email}
    </div>
  );
}

export default UserInterests;
