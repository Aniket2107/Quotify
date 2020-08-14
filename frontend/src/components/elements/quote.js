import React, { useState } from "react";
import { isAuthenticated } from "../Auth/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { createFavourite } from "./helper/helper";

const Quote = (props) => {
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [favourite, setFavourite] = useState({
    user: "",
    quote: "",
  });

  const { user, token } = isAuthenticated();

  const QuoteStyle = {
    background: `${props.background || "white"}`,
    color: `${props.color || "black"}`,
  };

  const toggleClass = () => {
    let undo = !clicked;
    setClicked(undo);
    handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addtoFavourite = (fav) => {
    setFavourite({ user: user._id, quote: fav });
    // createFavourite(user._id,token,favourite)
    console.log(favourite);
    handleClose();
  };

  return (
    <div className="col-md-4 col-sm-12">
      <div className="card quote" style={QuoteStyle}>
        {isAuthenticated() && (
          <FontAwesomeIcon
            style={{
              color: clicked ? "red" : "white",
            }}
            onClick={toggleClass}
            icon={faHeart}
          />
        )}
        <div className="card-body">
          <h4 className="card-title">{props.quote}</h4>
          <div className="card-author">
            <p className="card-text">~{props.author}</p>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Add to favourites ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            X
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
