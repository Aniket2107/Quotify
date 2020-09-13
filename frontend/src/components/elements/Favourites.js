import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as sHeart } from "@fortawesome/free-solid-svg-icons";
import { delUserFavourite } from "../User/helper";
import { isAuthenticated } from "../Auth/helper";

export function Favouritemodal({ _id }) {
  const [show, setShow] = useState(false);

  const { user, token } = isAuthenticated();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeFavourite = (favId) => {
    delUserFavourite(user._id, token, favId)
      .then((res) => console.log("Deleted"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <FontAwesomeIcon
        icon={sHeart}
        style={{ color: "red" }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove to favourites</Modal.Title>
        </Modal.Header>
        <Modal.Body>Remove to Favourites?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              removeFavourite(_id);
            }}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Favourites({ quote, author, background, color, _id }) {

  const QuoteStyle = {
    background: `${background || "white"}`,
    color: `${color || "black"}`,
  };
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card quote" style={QuoteStyle}>
        <div className="card-body">
          <h4 className="card-title">{quote}</h4>
          <div className="card-author">
            <p className="card-text">~{author}</p>
            <p className="card-text"><Favouritemodal _id={_id} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
