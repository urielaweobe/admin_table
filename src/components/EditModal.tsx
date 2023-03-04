import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "./form/FormInput";

interface props {
  show: boolean;
  onHide: any;
  editForm: any;
}

const EditModal: React.FC<props> = ({ show, onHide, editForm }) => {
  const formValues = {
    fullName: editForm.fullName,
    address: editForm.address,
    phoneNumber: editForm.phoneNumber,
    email: editForm.email,
  };

  const initialvalues = {
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  };

  const validate = Yup.object({
    fullName: Yup.string().required("Full name is required!"),
    address: Yup.string().required("Address is required!"),
    phoneNumber: Yup.string().required("Phone number is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
  });

  const handleEditSubmit = (values: any) => {
    console.log(values);
    onHide();
  };
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={formValues || initialvalues}
            validationSchema={validate}
            onSubmit={(values) => handleEditSubmit(values)}
          >
            {() => (
              <Form>
                <FormInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                />
                <FormInput
                  label="Contact Address"
                  name="address"
                  type="text"
                  placeholder="Enter your Address"
                />
                <FormInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter your Number"
                />
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                />

                <div style={{ textAlign: "right" }}>
                  <Button type="submit" variant="secondary">
                    Update
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
