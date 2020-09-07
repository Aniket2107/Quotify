import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth/helper";
import { getAllQuotes } from "../elements/helper/helper";
import { deleteQuote } from "./helper";
const ManageQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  const { user, token } = isAuthenticated();

  useEffect(() => {
    preload();
  }, [quotes]);

  const preload = () => {
    getAllQuotes()
      .then((res) => {
        console.log(res);
        setQuotes(res);
      })
      .catch((err) => console.log(err));
  };

  const goBack = () => {
    return (
      <Link to="/admin/profile" className="btn btn-dark">
        Admin Dashboard
      </Link>
    );
  };

  const removequote = (quoteId) => {
    deleteQuote(user._id, token, quoteId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("quote deleted");
      }
    });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="text-center">Welcome Admin</h2>
      <p className="text-center">Manage Quotes here</p>
      {/* Design a delete successful msg */}
      <div className="container">
        {goBack()}
        <br /> <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Quote</th>
              <th>Category</th>
              <th>PostedBy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((qute, idx) => {
              return (
                <tr key={qute._id}>
                  <td>{idx + 1}</td>
                  <td>{qute.quote}</td>
                  <td>
                    {qute.category.map((cat) => {
                      return (
                        <p>
                          {cat.categoryName ? cat.categoryName : "Undefined"}
                        </p>
                      );
                    })}
                  </td>
                  <td>{qute.postedBy}</td>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => removequote(qute._id)}
                      className="text-danger"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageQuotes;
