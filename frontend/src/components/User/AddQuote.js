import React, { useState, useEffect } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { isAuthenticated } from "../Auth/helper";
import { getCategories, createQuote } from "./helper";
import { Link } from "react-router-dom";

const AddQuote = () => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    quote: "",
    category: [],
    author: "",
    postedBy: user.username,
    background: "blue",
    error: false,
    success: false,
    createdQuote: "",
  });

  const [objectArray, setObjectArray] = useState([]);

  const { quote, category, author, error, success, createdQuote } = values;

  useEffect(() => {
    preload();
  }, []);

  const preload = () => {
    let temp = [];
    getCategories()
      .then((data) => {
        data.map((obj) => {
          temp = temp.concat({
            key: obj.categoryName,
            cat: "Group 1",
            _id: obj._id,
          });
        });
        // console.log(temp);
        setObjectArray(temp.slice());
        // console.log(objectArray);
      })
      .catch((err) => setValues({ ...values, error: err }));
  };

  const categorySelect = (selectedList, selectedItem) => {
    //console.log(selectedItem);
    setValues({
      ...values,
      category: category.concat(selectedItem._id),
    });
  };

  const handleChange = (quote) => (event) => {
    setValues({ ...values, [quote]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // console.log(values);
    createQuote(user._id, token, values).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        console.log("error");
      } else {
        setValues({
          ...values,
          quote: "",
          category: [],
          author: "",
          error: false,
          success: true,
          createdQuote: "Quote Added sucessfully",
        });
        console.log("quote added");
      }
    });
  };

  const successMsg = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: success ? "" : "none" }}
    >
      <h4>{createdQuote}</h4>
    </div>
  );

  const errorMsg = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: error ? "" : "none" }}
    >
      <h4>Error creating quote</h4>
    </div>
  );

  const quoteForm = () => (
    <div className="container" style={{ marginTop: "300px", maxWidth: "500px" }}>
      <h1 className="my-4"> <Link to="/user/profile"><i class="fas fa-chevron-left text-dark fa-fw"></i></Link> Add New Quote</h1>
      {errorMsg()}
      {successMsg()}
      <form className="form-group">
        <label>Quote:</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("quote")}
          placeholder="Write your quote here.."
          value={quote}
          style={{
            border: "none",
            borderBottom: "1px solid blue",
            borderRadius: "0px",
          }}
        />
        <br />
        <label>Category</label>
        <Multiselect
          options={objectArray}
          placeholder="Select Any"
          displayValue="key"
          onSelect={categorySelect}
          style={{
            chips: { background: "red" },
            searchBox: {
              border: "none",
              borderBottom: "1px solid blue",
              borderRadius: "0px",
            },
          }}
        />
        <br />
        <label>Author </label>
        <input
          type="text"
          value={author}
          onChange={handleChange("author")}
          className="form-control"
          style={{
            border: "none",
            borderBottom: "1px solid blue",
            borderRadius: "0px",
          }}
        />
        <br />
        <button onClick={onSubmit} className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );

  return (
    <div>
      {/*Style the form and and messages */}
      {quoteForm()}
    </div>
  );
};

export default AddQuote;
