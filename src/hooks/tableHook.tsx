import { useState } from "react";
import data from "../_data/mock-data.json";
// import { nanoid } from "nanoid";

const useTableHook = () => {
  const [contacts, setContacts] = useState(data);
  const [show, setShow] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  // const [addData, setAddData] = useState({
  //   fullName: "",
  //   address: "",
  //   phoneNumber: "",
  //   email: "",
  // });
  const [editContactId, setEditContactId] = useState(null);
  const [editForm, setEditForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // const handleAddChange = (e: any) => {
  //   const { name, value } = e.target;

  //   setAddData((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: value,
  //     };
  //   });
  // };

  // const handleEditChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setEditForm((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: value,
  //     };
  //   });
  // };

  const handleEditClick = (contact: any) => {
    setEditContactId(contact.id);

    const formValues = {
      id: editContactId,
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditForm(formValues);
  };

  // const handleEditSubmit = (e: any) => {
  //   if (e) e.preventDefault();

  //   const editedContact = {
  //     id: editContactId,
  //     fullName: editForm.fullName,
  //     address: editForm.address,
  //     phoneNumber: editForm.phoneNumber,
  //     email: editForm.email,
  //   };

  //   const newContacts = [...contacts];

  //   const i = contacts.findIndex((contact) => contact.id === editContactId);

  //   // newContacts[i] = editedContact;

  //   setContacts(newContacts);
  //   setEditContactId(null);
  // };

  // const handleAddSubmit = (e: any) => {
  //   if (e) e.preventDefault();

  //   const newContact = {
  //     id: nanoid(),
  //     fullName: addData.fullName,
  //     address: addData.address,
  //     phoneNumber: addData.phoneNumber,
  //     email: addData.email,
  //   };

  //   const newContacts = [...contacts, newContact];
  //   // setContacts(newContacts);
  //   setAddData({
  //     fullName: "",
  //     address: "",
  //     phoneNumber: "",
  //     email: "",
  //   });
  // };

  // const handleCancel = () => {
  //   setEditContactId(null);
  // };

  const handleDelete = (contactId: any) => {
    const newContacts = [...contacts];

    const i = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(i, 1);

    setContacts(newContacts);
  };

  const toggleAdd = () => {
    setShow(!show);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  return {
    handleEditClick,
    handleDelete,
    toggleAdd,
    toggleEdit,
    contacts,
    show,
    showEdit,
    editForm,
  };
};

export default useTableHook;
