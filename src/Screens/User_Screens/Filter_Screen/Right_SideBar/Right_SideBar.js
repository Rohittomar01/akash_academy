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



export default function Right_SideBar() {



  const navigate=useNavigate();

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
      status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFkdWx0fGVufDB8fDB8fHww",
    },
  ];



  

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
    return detail.map((item) => {
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
