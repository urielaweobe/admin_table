import React from "react";
import { Modal, Button } from "react-bootstrap";

const EditModal = ({
  show,
  onHide,
  handleCancel,
  handleEditSubmit,
  handleEditChange,
  editForm,
}) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="fullName"
                required="required"
                placeholder="John Doe"
                className="form-control"
                value={editForm.fullName}
                onChange={handleEditChange}
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
                value={editForm.address}
                onChange={handleEditChange}
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
                value={editForm.phoneNumber}
                onChange={handleEditChange}
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
                value={editForm.email}
                onChange={handleEditChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="secondary"
            onClick={() => {
              handleEditSubmit();
              onHide();
            }}
          >
            Update
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleCancel();
              onHide();
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
