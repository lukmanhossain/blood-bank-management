import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const DonorM = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, gender, address, bloodGroup, _id, age, mobile } = props.donar;

  return (
    <>
      <Button onClick={handleShow} className="btn-contact">
        Contact Me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donar Name: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Age: {age}</Modal.Body>
        <Modal.Body>Gender: {gender}</Modal.Body>
        <Modal.Body>Blood Group: {bloodGroup}</Modal.Body>
        <Modal.Body>Address: {address}</Modal.Body>
        <Modal.Body>Mobile: {mobile}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DonorM;
