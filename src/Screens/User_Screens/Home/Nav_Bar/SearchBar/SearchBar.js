import React, { useState } from "react";
// import Iocn
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  // A sample array of items to filter
  const items = ["Apple", "Banana", "Cherry", "Date", "Fig"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const inputStyle = {
    borderWidth: 0,
    padding: "4%",
    outline: "none",
    width:'10vw',
    borderRadius: 80,

  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          width: "30vw",
          height: "4vh",
          marginTop: "2%",
          boxShadow: "0px 15px 30px var(--cream)",
          borderRadius: 100,
          padding: "4%",
          borderColor: "green",
        }}
      >
        <SearchIcon style={{ color: "gray" }} />
        <input
          style={inputStyle}
          type="text"
          placeholder="Search..."
          aria-placeholder={{ colors: "red" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div style={{marginLeft:'12%',color:'grey',fontSize:21}}>
          |
        </div>
        <input
          style={inputStyle}
          type="text"
          placeholder="Zip Code"
          aria-placeholder={{ colors: "red" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
