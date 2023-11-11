import React, { useState } from "react";
// import Iocn
import SearchIcon from "@mui/icons-material/Search";

import { DataContext } from "../../../../../Context/Context";
import { useContext } from "react";

function SearchBar() {
  const {setData} = useContext(DataContext);

  const [searchQuery_02, setSearchQuery_02] = useState("");
  const [searchQuery_01, setSearchQuery_01] = useState("");

  const detail = [
    {
      id: 1,
      tutorname: "Horjontia",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
      status: "Offer Online Services",
      rating: 4,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHV0b3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 1,
      tutorname: "Nickjon",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
      status: "Offer Online Services",
      rating: 3,
      fee: 2500,
      image:
        "https://cdn.pixabay.com/photo/2016/03/02/10/32/allrounder-1232059_1280.jpg",
    },
    {
      id: 1,
      tutorname: "Sanjana Sharma",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
      status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR1bHR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 1,
      tutorname: "Sonali Sharma",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
      status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1609840114117-9aa293a418ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGFkdWx0fGVufDB8fDB8fHww",
    },
    {
      id: 1,
      tutorname: "Ronny",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
      status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1594814028668-9b44cea6a5ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFkdWx0fGVufDB8fDB8fHww",
    },
    {
      id: 1,
      tutorname: "Harendra Tomar",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
      status: "Offer Offline Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFkdWx0fGVufDB8fDB8fHww",
    },
  ];

  const sendData = () => {
    setData(filteredItems);
    console.log("filter",filteredItems)
  };

  // A sample array of items to filter

  const filteredItems = detail.filter(
    (item) =>
      item.tutorname.toLowerCase().includes(searchQuery_01.toLowerCase()) &&
      item.status.toLowerCase().includes(searchQuery_02.toLowerCase())
  );

  const inputStyle = {
    borderWidth: 0,
    padding: "4%",
    outline: "none",
    width: "10vw",
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
          value={searchQuery_01}
          onChange={(e) => [setSearchQuery_01(e.target.value),sendData()]}
        />
        <div style={{ marginLeft: "12%", color: "grey", fontSize: 21 }}>|</div>
        <input
          style={inputStyle}
          type="text"
          placeholder="Zip Code"
          aria-placeholder={{ colors: "red" }}
          value={searchQuery_02}
          onChange={(e) => [setSearchQuery_02(e.target.value),sendData()]}
        />
      </div>
    </div>
  );
}

export default SearchBar;
