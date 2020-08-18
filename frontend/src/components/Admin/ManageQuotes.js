import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../Auth/helper";
import {
  getAllQuotes,
  getQuoteById,
  getQuoteByCategory,
} from "../elements/helper/helper";
const ManageQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  const { user, token } = isAuthenticated();

  useEffect(() => {
    preload();
  }, []);

  const preload = () => {};

  return <div></div>;
};

export default ManageQuotes;
