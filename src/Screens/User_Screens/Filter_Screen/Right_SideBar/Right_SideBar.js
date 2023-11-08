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
import { Box, Grid,Rating } from "@mui/material";

export default function Right_SideBar() {
  const [expanded, setExpanded] = React.useState(false);

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
      tutorname: "Horjontia",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
        status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHV0b3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 1,
      tutorname: "Horjontia",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
        status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHV0b3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 1,
      tutorname: "Horjontia",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
        status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHV0b3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 1,
      tutorname: "Horjontia",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
        status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHV0b3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 1,
      tutorname: "Horjontia",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along",
        status: "Offer Online Services",
      rating: 5,
      fee: 2500,
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHV0b3J8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const showCards = () => {
    return detail.map((item) => {
      return (
        <Grid item xs={4}>
          <Box component={'div'} style={{paddingTop:'10%'}}>
            <Card sx={{ maxWidth: 290 }} elevation={4}>
                
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    {}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.tutorname}
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
                <Typography>
                <Rating name="read-only" value={item.rating} readOnly />
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Box>
      <Grid container>{showCards()}</Grid>
    </Box>
  );
}
