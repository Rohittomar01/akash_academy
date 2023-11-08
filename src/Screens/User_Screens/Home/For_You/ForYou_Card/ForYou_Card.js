import * as React from "react";
import { Box, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// for slider
import { createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// for icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


export default function ForYou_Card() {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));


  const detail = [
    {
      id: 1,
      heading: "Tutors by grade level",
      image:
        "https://images.unsplash.com/photo-1436262513933-a0b06755c784?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      heading: "Additional tutoring classes",
      image:
        "https://images.unsplash.com/photo-1598216254684-161d146c29b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyZWVuJTIwaW1nfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      heading: "Tutoring Prices",
      image:
        "https://images.unsplash.com/photo-1610046984556-5ec0acda645f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJsdWUlMjBpbWd8ZW58MHwwfDB8fHww",
    },
    {
      id: 4,
      heading: "Tutoring Courses",
      image:
        "https://cdn.pixabay.com/photo/2014/04/05/12/27/wood-317028_1280.jpg",
    },
    {
      id: 5,
      heading: "Tutoring Courses",
      image:
        "https://images.unsplash.com/photo-1645168159605-af46f85a1dac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJsYWNrJTIwaW1nfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      heading: "Find tutors in all 50 states",
      image:
        "https://images.unsplash.com/photo-1546109648-b53dd502335f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxpZ2h0JTIwY29sb3VyJTIwdGV4dHVyZXxlbnwwfDB8MHx8fDA%3D",
    },
  ];

  const showCard = () => {
    return detail.map((item) => {
      return (
        <Box component={'div'}>
          <Box>
            {" "}
            <Card
              sx={{
                // display: "flex",
                boxShadow: "0px 20px 20px  var(--cream)",
                borderRadius: 5,
                cursor: "pointer",
                background:`url("${item.image}")`,
                backgroundSize:sm?"":'29vw 40vh',
                backgroundRepeat:'no-repeat',
                height:sm?"":'40vh',
                width:sm?"90vw":'29vw',
                marginBottom: '5rem',
                marginTop:sm?'10%':''
                
              
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto", height: "22vh" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    style={{ width: sm?"40vw":"15vw",height:'15vh', fontFamily: "poppins",color:'white',fontSize:sm?22:30,marginLeft:'2%' }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    style={{ fontFamily: "poppins" ,color:'white',marginTop:sm?"12%":'22%',fontSize:sm?15:20,marginLeft:'2%' }}
                  >
                    Click To Check
                  </Typography>
                </CardContent>
              </Box>
              {/* <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.image}
                alt="Live from space album cover"
              /> */}
            </Card>
          </Box>
        </Box>
      );
    });
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: sm?1:3,
    slidesToScroll: 1,
    arrows: false, // Hide the arrow navigation
  };

  const Refferance = createRef();
  function handleLeftSlide() {
    Refferance.current.slickPrev();
  }
  function handleRightSlide() {
    Refferance.current.slickNext();
  }

  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingBottom: "2%",
      }}
    >
      <Paper elevation={4} style={{ display: sm?"none":""}}>
        <KeyboardArrowLeftIcon
          onClick={handleLeftSlide}
          style={{
            position: "absolute",
            zIndex: 1,
            color: "white",
            marginTop: "8.5%",
            backgroundColor: "green",
            borderRadius: 15,
            marginLeft: "1%",
            cursor: "pointer",
            fontSize: 28,
            boxShadow: "0px 20px 20px  var(--cream)"
          }}
        />
      </Paper>
      <Paper
        elevation={4}
        style={{ display: sm?"none":"flex", justifyContent: "flex-end" }}
      >
        <KeyboardArrowRightIcon
          onClick={handleRightSlide}
          style={{
            position: "absolute",
            zIndex: 1,
            color: "white",
            backgroundColor: "green",
            borderRadius: 15,
            marginTop: "8.5%",
            marginRight: "1%",
            cursor: "pointer",
            fontSize: 28,
            boxShadow: "0px 20px 20px  var(--cream)"
          }}
        />
      </Paper>
      <div
        style={{
          marginLeft: "3.5%",
          // width: "97.5%",
          justifyContent: "center",
          alignItems: "center",
          marginRight:"3.5%"
        }}
      >
                <div>
          <Slider ref={Refferance} {...settings}>
            {showCard()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
