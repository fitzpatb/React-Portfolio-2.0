import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modal.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6" id="modal-pic">
              <img className="project-pic" src={props.modal.image} alt={props.modal.alt}></img>
            </div>
            <div className="col-6" id="modal-content">
              <ul>Description
                <li id="modal-description">{props.modal.description}</li>
              </ul>
              <ul>Contributions
                <li id="modal-contributions">{props.modal.contributions}</li>
              </ul>
              <ul>Technologies
                <li id="modal-technologies">{props.modal.technologies}</li>
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button href={props.modal.gitbub}>GitHub</Button>
        <Button href={props.modal.website}>See Website</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default MyVerticallyCenteredModal;