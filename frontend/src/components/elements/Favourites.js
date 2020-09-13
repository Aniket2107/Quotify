import React, { useState, useEffect } from "react";
<<<<<<< HEAD
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
=======
import { Card,Modal,Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as sHeart } from "@fortawesome/free-solid-svg-icons";
import delUserFavourite from "../User/helper";

export function Favouritemodal(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <FontAwesomeIcon icon={sHeart} style={{color:"red"}} onClick={handleShow} />
>>>>>>> bb7299436dd890e6973cac064b10e259437855a9

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove to favourites</Modal.Title>
        </Modal.Header>
        <Modal.Body>Remove to Favourites?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
<<<<<<< HEAD
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              removeFavourite(_id);
            }}
          >
=======
          <Button variant="danger" onClick={handleClose,delUserFavourite}>
>>>>>>> bb7299436dd890e6973cac064b10e259437855a9
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

<<<<<<< HEAD
function Favourites({ quote, author, background, color, _id }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{quote}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">- {author} </Card.Subtitle>
        <Card.Text>
          <Favouritemodal _id={_id} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Favourites;
=======


function Favourites(){
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      <Favouritemodal />
    </Card.Text>
  </Card.Body>
</Card>
    );
}

export default Favourites;
>>>>>>> bb7299436dd890e6973cac064b10e259437855a9
