import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../Auth/helper";
import "../../assets/styles/sidebar.css";
import BG from "../../assets/images/signIn_bg.jpg";
import ProfileCard from "../elements/ProfileCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getUserFavourite } from "./helper";
import Quote from "../elements/quote";
import QuotesList from "../elements/QuotesList";
import Spinner from "react-bootstrap/Spinner";
import Favourites from "../elements/Favourites";
import { Link } from "react-router-dom";

const { user, token } = isAuthenticated();

function SpecificQuotesList() {
  return (
    <div>
      <div className="float-md-left float-sm-none w-100">
        <div className="text-white float-left">
          <h1>Your Quotes</h1>
        </div>
        <div className="text-white float-md-right float-sm-none">
          <h2>
            <Link to="/create/quote">
              <button type="button" className="btn btn-light">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; New Quote?
              </button>
            </Link>
          </h2>
        </div>
      </div>

      <QuotesList />
    </div>
  );
}
function InterestList() {
  return (
    <div className="text-white float-left">
      <h1>Your interests</h1>
    </div>
  );
}
function FavouritesList() {
  const [quotes, setQuotes] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    setLoader(true);
    getUserFavourite(user._id, token)
      .then((res) => {
        console.log(res);
        setQuotes(res);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-white" align="left">Favourites ;)</h1>
      <div className="row">
        {/* Style this  */}
        {loader && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {quotes.map((quote) => (
          <Quote
            quote={quote.quote.quote}
            author={quote.quote.author}
            background={quote.quote.background || "grey"}
            color={quote.quote.color || "white"}
            key={quote._id}
            _id={quote._id}
          />
        ))}
        <Favourites />
      </div>
    </div>
  );
}

function UserDashboard() {
  const [showQuotes, setShowQuotes] = useState(false);
  const [showInterests, setShowInterests] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  const DashboardStyles = {
    paddingTop: "64px",
    background: `url(${BG})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };
  return (
    <div className="text-center dashboard" style={DashboardStyles}>
      <div className="sidebar">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/favicon.ico"}
            alt="Menu"
            height="30"
          />
        </div>
        <div
          className={showQuotes ? "active text-warning" : ""}
          onClick={() => {
            setShowQuotes(true);
            setShowInterests(false);
            setShowFavourites(false);
          }}
        >
          <FontAwesomeIcon icon={faSquare} /> &nbsp; <span>Quotes</span>
        </div>
        <div
          className={showFavourites ? "active text-danger" : ""}
          onClick={() => {
            setShowQuotes(false);
            setShowInterests(false);
            setShowFavourites(true);
          }}
        >
          <FontAwesomeIcon icon={faHeart} /> &nbsp; <span>Favourites</span>
        </div>
        <div
          className={showInterests ? "active text-info" : ""}
          onClick={() => {
            setShowQuotes(false);
            setShowInterests(true);
            setShowFavourites(false);
          }}
        >
          <FontAwesomeIcon icon={faTasks} /> &nbsp; <span>Interests</span>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <br />
          <ProfileCard user={user} />
          <br />
          <br />
          <br />
          {showQuotes ? <SpecificQuotesList /> : null}
          {showInterests ? <InterestList /> : null}
          {showFavourites ? <FavouritesList /> : null}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
