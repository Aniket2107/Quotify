import React, { useState } from "react";
import { isAuthenticated } from "../Auth/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { createFavourite } from "./helper/helper";

const Quote = (props) => {
  const { user, token } = isAuthenticated();

  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [favourite, setFavourite] = useState({
    user: user ? user._id : "",
    quote: "",
  });

  const QuoteStyle = {
    background: `${props.background || "white"}`,
    color: `${props.color || "black"}`,
  };

  const toggleClass = (favId) => {
    let undo = !clicked;
    setClicked(undo);
    handleShow(favId);
  };

  const handleClose = () => {
    setShow(false);
    setFavourite({ ...favourite, quote: "" });
  };

  const handleShow = (favId) => {
    setShow(true);
    setFavourite({ ...favourite, quote: favId });
  };

  const addtoFavourite = (favId) => {
    setFavourite({ ...favourite, quote: favId });

    createFavourite(user._id, token, favourite)
      .then(() => console.log("Hurray fav added"))
      .catch((err) => console.log(err));
    console.log(`userId is ${favourite.userFav}`);
    console.log(`userId is ${favourite.quote}`);
    handleClose();
  };

  return (
    <div className="col-md-4 col-sm-12">
      <div className="card quote" style={QuoteStyle}>
        <div className="card-body">
          <h4 className="card-title">{props.quote}</h4>
          <div className="card-author">
            <p className="card-text">~{props.author}</p>
          </div>
          <h4>
            {isAuthenticated() && (
              <FontAwesomeIcon
                style={{
                  color: clicked ? "red" : "white",
                }}
                onClick={() => toggleClass(props._id)}
                icon={faHeart}
              />
            )}
          </h4>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Add to favourites ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => addtoFavourite(props._id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Quote;
