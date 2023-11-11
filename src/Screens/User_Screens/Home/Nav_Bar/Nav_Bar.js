import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Avatar, Button, Box, Paper, TextField } from "@mui/material";
// import Icon
import MenuIcon from "@mui/icons-material/Menu";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import SearchBar
import SearchBar from "./SearchBar/SearchBar";
// import navigate
import { useNavigate } from "react-router-dom";
// for dropdown
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
// import Icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Nav_Bar = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // style
  const menuItem = {
    fontFamily: "poppins",
    borderRadius: 12,
  };

  return (
    <Paper
      elevation={props.elevation}
      className="n-wrapper"
      id="Navbar"
      style={{ height: props.height }}
    >
      {/* left */}
      <div className="n-left">
        <div
          className="n-name"
          style={{
            paddingTop: props.paddingTop,
            paddingLeft: "8%",
            textShadow: "0px 10px 10px var(--cream)",
          }}
        >
          {sm ? (
            <>
              <Box
                component={"div"}
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <Box component={"div"} id="menuicon">
                  <MenuIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box
                  id="logo"
                  component={"div"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "75vw",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://akash.network/logos/akash-logo-primary.png"
                    width={"50%"}
                  ></img>
                </Box>
              </Box>
            </>
          ) : (
            <>Aakash academy</>
          )}
        </div>
      </div>
      <div
        style={{
          display: props.SearchBar,
          justifyContent: "flex-start",
          width: "50vw",
          paddingRight: "18%",
        }}
      >
        <SearchBar />
      </div>
      {/* right */}
      <div className="n-right" style={{ display: props.display }}>
        <div className="n-list">
          <ul style={{ listStyleType: "none", paddingTop: "4%" }}>
            <li>
              <Link
                activeClass="active"
                to="Navbar"
                style={{ textShadow: "0px 10px 10px var(--cream)" }}
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link style={{ display: "flex", flexDirection: "row" }}>
                <Link
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Services
                </Link>
                <ArrowDropDownIcon onClick={handleClick} />
              </Link>
              <Paper style={{ borderRadius: 20 }}>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade} // Change the transition component to Slide
                  PaperProps={{
                    sx: {
                      borderRadius: 8,
                      padding: "1%",
                    },
                  }}
                >
                  <MenuItem style={menuItem} onClick={handleClose}>
                    Tutors Near You
                  </MenuItem>
                  <MenuItem style={menuItem} onClick={handleClose}>
                    Tutors Services In Your Area
                  </MenuItem>
                  <MenuItem style={menuItem} onClick={handleClose}>
                    Online Tutoring
                  </MenuItem>
                  <MenuItem style={menuItem} onClick={handleClose}>
                    Neaby Language Tutors
                  </MenuItem>
                  <MenuItem style={menuItem} onClick={handleClose}>
                    Test Prep Tutoring
                  </MenuItem>
                  <MenuItem style={menuItem} onClick={handleClose}>
                    For Information
                  </MenuItem>
                </Menu>
              </Paper>
            </li>
            <li>
              <Link
                to="works"
                style={{ textShadow: "0px 10px 10px var(--cream)" }}
                spy={true}
                smooth={true}
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                style={{ textShadow: "0px 10px 10px var(--cream)" }}
                spy={true}
                smooth={true}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                style={{ textShadow: "0px 10px 10px var(--cream)" }}
                spy={true}
                smooth={true}
              >
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        {sm ? (
          <></>
        ) : (
          <>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              style={{ display: props.display }}
            >
              <Button
                variant="contained"
                style={{
                  background: "green",
                  color: "white",
                  borderRadius: 70,
                  height: "7vh",
                  width: "9vw",
                  top: "2.5vh",
                  right: "2vw",
                  fontFamily: "sans-serif",
                  boxShadow: "0px 10px 10px var(--cream)",
                }}
                // onClick={()=>navigate('/Student_SignIn')}
              >
                Login/Sigup
              </Button>
            </Link>
          </>
        )}
      </div>
    </Paper>
  );
};

export default Nav_Bar;
