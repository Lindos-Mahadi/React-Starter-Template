import React, { useState } from 'react'
import {Button, Modal} from "react-bootstrap";

const ReactModal = () =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow}>modal show</Button>
      <Modal show={show} onHide={handleClose} size = "lg" centered >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </React.Fragment>
    )
}
export default ReactModal;