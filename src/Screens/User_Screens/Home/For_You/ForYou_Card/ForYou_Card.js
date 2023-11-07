import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function ForYou_Card() {
  const theme = useTheme();

  const detail = [
    {
      id: 1,
      heading: "Tutors by grade level",
      image:
        "https://cdn.pixabay.com/photo/2018/08/27/14/34/shaniwar-wada-3635113_1280.jpg",
    },
    {
      id: 2,
      heading: "Additional tutoring classes",
      image:
        "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_1280.jpg",
    },
    {
      id: 3,
      heading: "Tutoring Prices",
      image:
        "https://cdn.pixabay.com/photo/2017/01/19/20/28/chess-1993272_1280.jpg",
    },
    {
      id: 4,
      heading: "Tutoring Courses",
      image:
        "https://cdn.pixabay.com/photo/2019/08/13/08/15/analysis-4402809_1280.jpg",
    },
    {
        id: 5,
        heading: "Tutoring Courses",
        image:
          "https://cdn.pixabay.com/photo/2019/08/13/08/15/analysis-4402809_1280.jpg",
      },
      {
        id: 6,
        heading: "Tutoring Courses",
        image:
          "https://cdn.pixabay.com/photo/2019/08/13/08/15/analysis-4402809_1280.jpg",
      },
   
  ];

  const showCard = () => {
    return detail.map((item) => {
      return (
        <Box>
          <Box>
            {" "}
            <Card sx={{ display: "flex",boxShadow:'10px 10px 30px  5px  var(--cream)' ,borderRadius:5,cursor:'pointer' }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" ,height:'22vh'}}>
                  <Typography component="div" variant="h5" style={{width:'10vw',fontFamily:'poppins'}}>
                    {item.heading}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    style={{fontFamily:'poppins'}}
                  >
                    Click To Check
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.image}
                alt="Live from space album cover"
              />
            </Card>
          </Box>
        </Box>
      );
    });
  };

  return (
    <Box>
      <Box component={'div'} style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
        {showCard()}
      </Box>
    </Box>
  );
}
