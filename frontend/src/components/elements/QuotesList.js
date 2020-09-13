import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Quote from "./quote";
import { getAllQuotes } from "./helper/helper";

const QuotesList = () => {
  const [quotes, setQuotes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    setLoader(true);
    getAllQuotes()
      .then((res) => {
        // console.log(res);
        setQuotes(res);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchBar = () => {
    return (
      <div classNames="form-group d-flex justify-content-center align-items-center">
        <input
          type="text"
          classNames="form-control"
          name="search_query"
          style={{
            maxWidth: "400px",
            background: "rgba(0,0,0,.6)",
            color: "white",
          }}
          id="search_query"
          placeholder="Search for any category"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    );
  };

  const filteredQuotes = quotes.filter((quote) => {
    return quote.quote.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      {searchBar()}

      <div className="row">
        {/* Style this  */}
        {loader && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        {filteredQuotes.map((quote) => (
          <Quote
            quote={quote.quote}
            author={quote.author}
            background={quote.background}
            color={quote.color}
            key={quote._id}
            _id={quote._id}
          />
        ))}
      </div>
    </>
  );
};

export default QuotesList;
