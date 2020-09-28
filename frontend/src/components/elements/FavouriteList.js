import React, { useState, useEffect } from "react";
import { getUserFavourite } from "../User/helper";
import Favourites from "../elements/Favourites";
import { isAuthenticated } from "../Auth/helper";

function FavouritesList() {
  const [quotes, setQuotes] = useState([]);
  const [loader, setLoader] = useState(false);

  const { user, token } = isAuthenticated();

  const getQuotes = () => {
    setLoader(true);
    getUserFavourite(user._id, token)
      .then((res) => {
        setQuotes(res);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQuotes();
  }, [quotes]);

  return (
    <div>
      <h1 className="text-white" align="left">
        Favourites ;)
      </h1>
      <div className="row">
        {loader && (
          <div style={{ display: loader ? "" : "none" }}>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <div className="row">
          {quotes &&
            quotes.map((value) => {
              return (
                <div className="col-md-6">
                  <Favourites
                    quote={value.quote ? value.quote.quote : ""}
                    author={value.quote ? value.quote.author : ""}
                    _id={value ? value._id : ""}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FavouritesList;
