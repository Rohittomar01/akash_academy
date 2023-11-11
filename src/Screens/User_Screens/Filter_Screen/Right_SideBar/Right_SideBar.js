import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid, Rating, Button, Badge } from "@mui/material";
// import navigate
import { useNavigate } from "react-router-dom";

import { useContext,useState } from "react";
import { DataContext } from "../../../../Context/Context";


export default function Right_SideBar() {

 const {data}=useContext(DataContext)
//  console.log("detail",data)

//  const [details,setDetails]=useState([data]);


  const navigate=useNavigate();

  

  //   for rating star
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent",
  };
  //   for rating star
  const top = {
    0.5: "",
    1: "",
    1.5: "",
    2: "",
    2.5: "",
    3: "",
    3.5: "",
    4: "",
    4.5: "",
    5: "Top 10",
  };

  const showCards = () => {
    return data.map((item) => {
      const stars = item.rating;

      return (
        <Grid item xs={4}>
          <Box component={"div"} style={{ paddingBottom: "10%" }}>
            <Card sx={{ maxWidth: 290 }} elevation={4}>
              <CardHeader
                avatar={
                    
                    <Avatar
                      src={item.image}
                      alt={item.tutorname}
                      sx={{ bgcolor: green[500], cursor: "pointer" }}
                      aria-label="recipe"
                      onClick={()=>navigate('/TutorProfile')}
                    ></Avatar>
                           }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  <Typography style={{ display: "flex", flexDirection: "row" }}>
                    <Typography>{item.tutorname}</Typography>
                  </Typography>
                }
                subheader={item.status}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography style={{ display: "flex", flexDirection: "row" }}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={item.rating}
                    readOnly
                  />
                  <Box sx={{ ml: 1}}>{labels[stars]}</Box>
                  <Box sx={{ ml: 1,color:'green',fontWeight:"bold" }}>{top[stars]}</Box>
                </Typography>
                <Typography>
                  <Box sx={{ ml: 2, color: "green", fontSize: 0 }}></Box>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <Button
                    variant="filled"
                    style={{ color: "green", marginLeft: "8vw" }}
                    color="success"
                    onClick={()=>navigate('/TutorProfile')}

                  >
                    Profile
                  </Button>
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Box component="div">
      <Grid container style={{ height: "120vh", overflow: "scroll" }}>
        {showCards()}
      </Grid>
    </Box>
  );
}
