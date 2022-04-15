import React from "react";
import { Modal, Button } from "react-bootstrap";

const AddModal = ({ show, onHide, handleAddSubmit, handleAddChange }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddSubmit}>
            <div className="form-group">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="fullName"
                required="required"
                placeholder="John Doe"
                className="form-control"
                onChange={handleAddChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                required="required"
                placeholder="Enter your addres"
                className="form-control"
                onChange={handleAddChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Phone Numner</label>
              <input
                type="text"
                name="phoneNumber"
                required="required"
                placeholder="333-444-5555"
                className="form-control"
                onChange={handleAddChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                required="required"
                placeholder="john@gmail.com"
                className="form-control"
                onChange={handleAddChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="secondary"
            onClick={() => {
              handleAddSubmit();
              onHide();
            }}
          >
            Add
          </Button>
          <Button variant="primary" onClick={onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
