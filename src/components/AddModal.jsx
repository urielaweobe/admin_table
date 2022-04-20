import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormInput from "./form/FormInput";
import inputs from "../_data/input-data.json"

const AddModal = (props) => {
  const { show, onHide, handleAddSubmit, handleAddChange } = props;


  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddSubmit}>
            {inputs.map((input) => (
              <FormInput 
              key={input.id}
              {...input}
              onChange={handleAddChange}
              />
            ))}
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
