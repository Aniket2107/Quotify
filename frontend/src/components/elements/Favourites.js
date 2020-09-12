import React, { useState, useEffect } from "react";
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove to favourites</Modal.Title>
        </Modal.Header>
        <Modal.Body>Remove to Favourites?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose,delUserFavourite}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



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