import { useState, useMemo } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import FilerobotImageEditor, {
  TABS,
  // TOOLS,
} from "react-filerobot-image-editor";

import useTableHook from "./hooks/tableHook";
import { Header, Search, Pagination } from "./components/table";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";

function App() {
  const {
    handleEditClick,
    handleDelete,
    toggleAdd,
    toggleEdit,
    contacts,
    show,
    showEdit,
    editForm,
  } = useTableHook();
  const ITEM_PER_PAGE = 5;

  // const [comments, setComments] = useState(contacts);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const headers = [
    { name: "Name", field: "fullName", sortable: true },
    { name: "Email", field: "email", sortable: true },
    { name: "Address", field: "address", sortable: true },
    { name: "Phone", field: "phone", sortable: true },
    { name: "", field: "", sortable: false },
  ];

  const commentsData = useMemo(() => {
    let computedComments = contacts;

    if (search) {
      computedComments = (computedComments as Array<any>).filter(
        (comment) =>
          comment.name?.toLowerCase().includes(search.toLowerCase()) ||
          comment.email?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems((computedComments as Array<any>).length);

    // Sorting comments
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedComments = (computedComments as Array<any>).sort(
        (a, b) => reversed * a[sorting.field]?.localeCompare(b[sorting.field])
      );
    }

    // current page slice
    return (computedComments as Array<any>).slice(
      (currentPage - 1) * ITEM_PER_PAGE,
      (currentPage - 1) * ITEM_PER_PAGE + ITEM_PER_PAGE
    );
  }, [contacts, currentPage, search, sorting]);

  // const currentDate = new Date(); // Get the current date
  // const currentYear = currentDate.getFullYear(); // Get the current year
  // const birthday = new Date(`January 15 ${currentYear}`); // Set the birthday to January 15 of the current year

  // if (currentDate.getTime() === birthday.getTime()) {
  //   // Check if the current date is equal to the birthday
  //   console.log("happy birthday");
  // } else {
  //   if (currentDate.getTime() > birthday.getTime()) {
  //     // If the current date is after the birthday, set the birthday to January 15 of the following year
  //     birthday.setFullYear(currentYear + 1);
  //   }

  //   // Calculate the number of days, hours, minutes, and seconds until the birthday
  //   const timeUntilBirthday = birthday.getTime() - currentDate.getTime();
  //   const daysUntilBirthday = Math.floor(
  //     timeUntilBirthday / (1000 * 60 * 60 * 24)
  //   );
  //   const hoursUntilBirthday = Math.floor(
  //     (timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   const minutesUntilBirthday = Math.floor(
  //     (timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60)
  //   );
  //   const secondsUntilBirthday = Math.floor(
  //     (timeUntilBirthday % (1000 * 60)) / 1000
  //   );

  //   // Print the countdown to the console
  //   console.log(
  //     `${daysUntilBirthday} days, ${hoursUntilBirthday} hours, ${minutesUntilBirthday} minutes, and ${secondsUntilBirthday} seconds until my birthday`
  //   );
  // }

  // filerobot editor
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  return (
    <div className="container pt-5">
      <div className="row">
        <div style={{ textAlign: "right" }}>
          <button onClick={() => toggleAdd()} className="btn btn-primary">
            Add
          </button>
        </div>

        <div>
          <Search
            onSearch={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
      <div
        className="table-responsive-sm"
        style={{ height: "500px", overflow: "auto" }}
      >
        <table className="table">
          <Header
            headers={headers}
            onSorting={(field, order) => setSorting({ field, order })}
          />
          <tbody>
            {commentsData.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.address}</td>
                <td>{contact.phoneNumber}</td>
                <td className="btn-group">
                  <button
                    onClick={() => {
                      handleEditClick(contact);
                      toggleEdit();
                    }}
                  >
                    <AiOutlineEdit />
                  </button>
                  <button onClick={() => handleDelete(contact.id)}>
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-right">
        <Pagination
          itemsCount={totalItems}
          itemsPerPage={ITEM_PER_PAGE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          alwaysShown={true}
        />
      </div>

      {/* filerobot editor */}
      <div className="pb-5">
        <button onClick={openImgEditor}>Open Filerobot image editor</button>
        {isImgEditorShown && (
          <FilerobotImageEditor
            source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
            onSave={(editedImageObject, designState) => {
              console.log("saved", editedImageObject, designState);
            }}
            onClose={closeImgEditor}
            annotationsCommon={{
              fill: "#ff0000",
            }}
            Text={{ text: "Filerobot..." }}
            Rotate={{ angle: 90, componentType: "slider" }}
            tabsIds={[TABS.ANNOTATE]} // or {['Adjust', 'Annotate', 'Watermark']}
            defaultTabId={TABS.ANNOTATE} // or 'Annotate'
            // defaultToolId={TOOLS.ARROW} // or 'Text'
            savingPixelRatio={0}
            previewPixelRatio={0}
            disableZooming
          />
        )}
      </div>

      <AddModal show={show} onHide={toggleAdd} />

      <EditModal show={showEdit} onHide={toggleEdit} editForm={editForm} />
    </div>
  );
}

export default App;
