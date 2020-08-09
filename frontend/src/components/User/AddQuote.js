import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { isAuthenticated } from "../Auth/helper";

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

  const { quote, categories, author, error, success } = values;

  const objectArray = [
    { key: "Option 1", cat: "Group 1", id: "nice" },
    { key: "Option 2", cat: "Group 1" },
    { key: "Option 3", cat: "Group 1" },
    { key: "Option 4", cat: "Group 1" },
    { key: "Option 5", cat: "Group 1" },
    { key: "Option 6", cat: "Group 1" },
    { key: "Option 7", cat: "Group 1" },
  ];

  const categorySelect = (selectedList, selectedItem) => {
    //console.log(selectedItem);
    setValues({
      ...values,
      categories: categories.concat(selectedItem.key),
    });

    {
      /*Alternative*/
    }

    // selectedList.map((obj) => {
    //   //console.log(obj.key);
    //   setValues({
    //     ...values,
    //     categories: [...categories, obj.key],
    //   });
    // });
  };

  const handleChange = (quote) => (event) => {
    setValues({ ...values, [quote]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(values);
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
