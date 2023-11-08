import React, { useState, useEffect } from "react";
import { createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Grid, Typography, colors, Box, Button } from "@mui/material";
// import { serverURL, getData } from "../../../services/ServerServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Main_Slider() {

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));



  const [Banner, setBanner] = useState([]);


  // const fetchAllBanner = async () => {
  //     var result = await getData('banner/fetch_all_banner')
  //     var Data=result.data[0].images
  //     var Images = Data.substring(0,Data.length-1).split(',')
  //     setBanner(Images)
  // };

  useEffect(function () {
    // fetchAllBanner();
  }, []);
  const Text = [
    {
      Heading: "Welcome In Learnig World",
      P: "Hello everyone this is the most entertaining charater Rohit tomar entertaining charater Rohit tomar",
      source:
        "https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp",
    },
    {
      Heading: "Welcome In Learnig World",
      P: "Hello everyone this is the most entertaining charater Vikash tomar",
      source:
        "https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp",
    },
    {
      Heading: "Welcome In Learnig World",
      P: "Hello everyone this is the most entertaining charater Deepak tomar",
      source:
        "https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp",
    },
    {
      Heading: "Welcome In Learnig World",
      P: "Hello everyone this is the most entertaining charater Rohit tomar",
      source:
        "https://cdni.iconscout.com/illustration/premium/thumb/businessman-manager-holding-document-paper-checking-using-big-magnifying-glass-9330224-7595425.png?f=webp",
    },
  ];

  const playImage = () => {
    return Text.map((item) => {
      return (
        <Grid
          xs={12}
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            flexWrap:'wrap'
            
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap:sm?'wrap-reverse':"nowrap"
            }}
          >
            <Grid item xs={12}  md={6}>
              <Box
                component="div"
                style={{ height: md?"25vh":"27vh", overflow: "hidden" }}
              >
                <Typography
                  component={"h1"}
                  style={{
                    color: "white",
                    fontFamily: "poppins",
                    letterSpacing: 5,
                    fontSize: md?50:40,
                    marginLeft: "10%",
                    fontWeight: "bold",
                  }}
                >
                  {item.Heading}
                </Typography>
              </Box>
              <Box
                component="div"
                style={{ height: "14vh", overflow: "hidden" }}
              >
                <Typography
                  component={"p"}
                  style={{
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: 20,
                    width: sm?"":"25vw",
                    marginLeft: "10%",
                  }}
                >
                  {item.P}
                </Typography>
              </Box>
              <Box
                component={"div"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "38%",
                  paddingTop: "15%",
                  paddingLeft:sm?"7%":""
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    background: "white",
                    color: "black",
                    borderRadius: 70,
                    height:"8vh",
                    width: sm?"35vw":"10vw",
                  }}
                >
                  More
                </Button>
              </Box>
            </Grid>
            <Grid item  xs={sm?12:4}>
              <div>
                <img src={item.source} style={{width:sm?'60%':'74%',marginLeft:sm?'19%':'',marginTop:sm?"2%":""}}></img>
              </div>
            </Grid>
          </div>
        </Grid>
      );
    });
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
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
    <div  style={{background:'url("https://plus.unsplash.com/premium_photo-1680807868966-90a84c68c944?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D")',backgroundRepeat:'no-repeat',backgroundSize:sm?'120vw 120vh':'100vw 100vh'}}>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(17,95,30,0.9417892156862745) 25%, rgba(3,110,16,0.9277836134453782) 70%)",
          height: sm?"105vh":"100vh",
        }}
      >
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box style={{ paddingTop: "9%" }}>
            <Slider ref={Refferance} {...settings}>
              {playImage()}
            </Slider>
          </Box>
          <div
            style={{
              width: "82%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ marginRight: "6%",display:sm?'none':'' }}>
              <KeyboardArrowLeftIcon
                onClick={handleRightSlide}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  backgroundColor: "white",
                  borderRadius: 25,
                  marginRight: "2%",
                  cursor: "pointer",
                  fontSize: 42,
                }}
              />
            </div>
            <div  style={{display:sm?'none':''}}>
              <KeyboardArrowRightIcon
                onClick={handleLeftSlide}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  backgroundColor: "white",
                  borderRadius: 25,
                  marginLeft: "2%",
                  cursor: "pointer",
                  fontSize: 42,
                  
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
