import React, { useState, useEffect } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { isAuthenticated } from "../Auth/helper";
import { getCategories } from "./helper";

const AddQuote = () => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    quote: "",
    categories: [],
    author: "",
    postedBy: "Aniket",
    error: false,
    success: false,
  });

  const [objectArray, setObjectArray] = useState([]);

  const { quote, categories, author, error, success } = values;

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
      categories: categories.concat(selectedItem._id),
    });
  };

  const handleChange = (quote) => (event) => {
    setValues({ ...values, [quote]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    // console.log(objectArray);
  };

  const quoteForm = () => (
    <div className="container" style={{ marginTop: "300px" }}>
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
              "border-bottom": "1px solid blue",
              "border-radius": "0px",
            },
          }}
        />
        <label>Author </label>
        <input
          type="text"
          value={author}
          onChange={handleChange("author")}
          className="form-control"
        />
        <br />
        <button onClick={onSubmit} className="btn btn-primary form-control">
          Submit
        </button>
      </form>
    </div>
  );

  return <div>{quoteForm()}</div>;
};

export default AddQuote;
