import React, { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  // A sample array of items to filter
  const items = ["Apple", "Banana", "Cherry", "Date", "Fig"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        style={{
          background: "white",
          borderWidth: 0,
          width: "30vw",
          height: "4vh",
          marginTop: "2%",
          boxShadow: "0px 15px 30px var(--cream)",
          borderRadius: 80,
          padding: "4%",
          borderColor: "green",
        }}
        type="text"
        placeholder="Search..."
        aria-placeholder={{ colors: "red" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
