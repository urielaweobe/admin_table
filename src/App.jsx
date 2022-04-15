import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import useTableHook from "./hooks/tableHook";

import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";

function App() {
  const [
    handleAddChange,
    handleEditChange,
    handleEditClick,
    handleEditSubmit,
    handleAddSubmit,
    handleCancel,
    handleDelete,
    toggleAdd,
    toggleEdit,
    contacts,
    show,
    showEdit,
    editForm,
  ] = useTableHook();

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="ml-auto">
          <button onClick={toggleAdd} className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td className="btn-group">
                <a
                  onClick={() => {
                    handleEditClick(contact);
                    toggleEdit();
                  }}
                >
                  <AiOutlineEdit />
                </a>
                <a to="" onClick={() => handleDelete(contact.id)}>
                  <AiOutlineDelete />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddModal
        show={show}
        onHide={toggleAdd}
        handleAddSubmit={handleAddSubmit}
        handleAddChange={handleAddChange}
      />

      <EditModal
        show={showEdit}
        onHide={toggleEdit}
        handleEditChange={handleEditChange}
        editForm={editForm}
        handleEditSubmit={handleEditSubmit}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default App;
