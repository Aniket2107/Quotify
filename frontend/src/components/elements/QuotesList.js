import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Quote from "./quote";
import { getAllQuotes } from "./helper/helper";

const QuotesList = () => {
  const [quotes, setQuotes] = useState([]);
  const [loader, setLoader] = useState(false);

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

  return (
    <div className="row">
      {/* Style this  */}
      {loader && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      {quotes.map((quote) => (
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
  );
};

{
  /* onclick ..add to a state and on every state change, add it to backend using add to favourites method...booooooom... */
}

{
  /* {
      id: 1,
      quote: "This is a quote that the lord has made",
      author: "Rohan Punjani",
      background: "#abded6",
      color: "black",
    },
    {
      id: 2,
      quote: "Let us be glad and rejoice!",
      author: "Aniket Habib",
      background: "#bebec0",
      color: "black",
    },
    {
      id: 3,
      quote: "All we ever knew is gonna go Blah Blaho Blah",
      author: "Rohan Punjani",
      background: "#4d4d4e",
      color: "white",
    },
    {
      id: 4,
      quote: "And we don`t give a damn about what they say!",
      author: "Aniket Habib",
      background: "#1f639b",
      color: "white",
    }, */
}

export default QuotesList;
