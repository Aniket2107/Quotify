import React, { useState, useEffect } from "react";
import Quote from "./quote";
import { getAllQuotes } from "./helper/helper";

const QuotesList = () => {
  const [quotes, setQuotes] = useState([
    {
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
    },
  ]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    getAllQuotes()
      .then((res) => {
        console.log(res);
        {
          /* setQuotes(res)*/
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row">
      {quotes.map((quote) => (
        <Quote
          quote={quote.quote}
          author={quote.author}
          background={quote.background}
          color={quote.color}
          key={quote.id}
        />
      ))}
    </div>
  );
};

{
  /* onclick ..add to a state and on every state change, add it to backend using add to favourites method...booooooom... */
}

export default QuotesList;
