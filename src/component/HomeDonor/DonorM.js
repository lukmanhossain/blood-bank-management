import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const DonorM = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {   
        setShow(true)
    };

  
    return (
        <>

        <Button onClick={handleShow}  className='btn-contact' >
          Contact Me
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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