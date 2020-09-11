import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth/helper";
import '../../assets/styles/sidebar.css'
import BG from '../../assets/images/signIn_bg.jpg';
import ProfileCard from "../elements/ProfileCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { getUserFavourite } from "./helper";
import Quote from '../elements/quote'
import Spinner from "react-bootstrap/Spinner";

const {user, token} = isAuthenticated();

function SpecificQuotesList() {
  return (
    <div className="text-white">
      This is quotes list
    </div>
  )
}
function InterestList() {
  return (
    <div className="text-white">
      This is Interests list
    </div>
  )
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
    <div className="row">
      {/* Style this  */}
      {loader && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      {quotes.map((quote) => (
        <Quote
          // quote={quote.quote}
          // author={quote.author}
          // background={quote.background}
          // color={quote.color}
          // key={quote._id}
          // _id={quote._id}
        />
      ))}
    </div>
  );
}


function UserDashboard () {
  const [showQuotes, setShowQuotes] = useState(false);
  const [showInterests, setShowInterests] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  const DashboardStyles = {
    marginTop: '64px',
    background: `url(${BG})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  }
  return (
    <div className="text-center" style={DashboardStyles}>
      
      <div className="sidebar" >
          <a className="active" onClick={() => {
            setShowQuotes(false)
            setShowInterests(false)
            setShowFavourites(false)
          }}><FontAwesomeIcon icon={faHome} /> &nbsp; Profile</a>
          <a className={showQuotes ? "active" : ''} onClick={() => {
              setShowQuotes(true)
              setShowInterests(false)
              setShowFavourites(false)
            }
          }><FontAwesomeIcon icon={faSquare} /> &nbsp; Your Quotes</a>
          <a className={showFavourites ? "active" : ''} onClick={
            () => {
              setShowQuotes(false)
              setShowInterests(false)
              setShowFavourites(true)
            }
          }><FontAwesomeIcon icon={faHeart} /> &nbsp; Favourites</a>
          <a className={showInterests ? "active" : ''} onClick={() => {
            setShowQuotes(false)
            setShowInterests(true)
            setShowFavourites(false)
          }}><FontAwesomeIcon icon={faTasks} /> &nbsp; Interests</a>
      </div>
      <div className="content">
        <div className="container">
          <br />
          <ProfileCard user={user}/>
          <br />
          <br />
          <br />
          {showQuotes ? <SpecificQuotesList /> :null}
          {showInterests ? <InterestList/> : null}
          {showFavourites ? <FavouritesList/> : null}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
