import React, { useState } from 'react'

interface props {
  onSearch: (e: any) => void;
}

const Search: React.FC<props> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("")

  const onInputChange = (value: any) => {
    setSearch(value);
    onSearch(value);
  }
  return (
    <div>
      <input 
        type="search"
        aria-label="Search"
        className="form-control"
        style={{ width: "240px" }}
        placeholder={search || "Search contacts"}
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  )
}

export default Search