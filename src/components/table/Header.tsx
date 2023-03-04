import React, { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

interface props {
  headers: Array<any>;
  onSorting: ((i: any, e:any) => void);
}

const Header: React.FC<props>  = ({ headers, onSorting }) => {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");

  const onSortingChange = (field: any) => {
    const order =
      field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };
  return (
    <>
      <thead>
        <tr>
          {headers.map(({ name, field, sortable }: any) => (
            <th
              key={name}
              onClick={() => (sortable ? onSortingChange(field) : null)}
            >
              {name}

              {sortingField && sortingField === field && (
                // <FontAwesomeIcon
                //   icon={sortingOrder === "asc" ? "arrow-down" : "arrow-up"}
                // />
                sortingOrder === "asc" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />
              )}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default Header;
