import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import FormInput from "./form/FormInput";

interface props {
  show: boolean;
  onHide: any;
}

interface FormValues {
  id?: any;
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
}

const AddModal: React.FC<props> = ({ show, onHide }) => {

  const initialvalues: FormValues = {
    id: nanoid(),
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

  const handleAddSubmit = (values: any) => {
    console.log(values);
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialvalues}
            validationSchema={validate}
            onSubmit={(values) => handleAddSubmit(values)}
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
                    Add
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

export default AddModal;
