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

const Nav_Bar = (props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Paper
      placeholder="kjsihwfi"
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
            <>Akash academy</>
          )}
        </div>
      </div>
      <div
        style={{
          display: props.SearchBar,
          justifyContent: "flex-start",
          width: "50vw",
          paddingRight:'18%'
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
              <Link
                to="services"
                style={{ textShadow: "0px 10px 10px var(--cream)" }}
                spy={true}
                smooth={true}
              >
                Courses
              </Link>
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
