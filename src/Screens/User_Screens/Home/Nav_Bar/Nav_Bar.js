import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Button } from "@mui/material";


const Nav_Bar= () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name"style={{paddingTop:'4%',paddingLeft:'8%',textShadow:'0px 10px 10px var(--cream)'}}>Akash academy</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" ,paddingTop:'4%'}}>
            <li>
              <Link activeClass="active" to="Navbar" style={{textShadow:'0px 10px 10px var(--cream)'}}spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" style={{textShadow:'0px 10px 10px var(--cream)'}}spy={true} smooth={true}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="works"style={{textShadow:'0px 10px 10px var(--cream)'}} spy={true} smooth={true}>
                Achievements
              </Link>
            </li>
            <li>
              <Link to="portfolio" style={{textShadow:'0px 10px 10px var(--cream)'}}spy={true} smooth={true}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="testimonial"style={{textShadow:'0px 10px 10px var(--cream)'}} spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <Button
                  variant="contained"
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: 70,
                    height: "7vh",
                    width: "9vw",
                    top:'2.5vh',
                    right:'2vw',
                    fontFamily:'sans-serif',
                    boxShadow:'0px 10px 10px var(--cream)'
                   
                  }}
                >
                 Login/Sigup
                </Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav_Bar;
