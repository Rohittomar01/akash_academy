import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import { Box ,Button} from "@mui/material";
// import style
import { card_Style } from "./CardCSS";




export default function Cards() {

    const classes=card_Style();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const detail = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8fDA%3D",
      heading: "Chess",
      paragraph: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVuZ2xpc2h8ZW58MHx8MHx8fDA%3D",
        heading: "English",
        paragraph: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2018/05/17/16/03/compass-3408928_1280.jpg",
        heading: "History",
        paragraph: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/09/23/03/54/background-5594879_1280.jpg",
        heading: "Math",
        paragraph: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
      },
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_1280.jpg",
        heading: "Calculas",
        paragraph: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
      },
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8fDA%3D",
        heading: "Chess",
        paragraph: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
      },
  ];


  const showCard=()=>{
    return detail.map((item)=>{
        return(
            <Card elevation={4} className={classes.card}>
            <CardMedia component="img" height="194" image={item.image} alt={item.heading} />
            <CardContent>
              <Typography variant="h5" color={'green'}>{item.heading}</Typography>
              <Typography variant="body2" color="text.secondary">{item.paragraph}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button
                  size="medium"
                  style={{
                    background: "white",
                    color: "green",
                    borderRadius: 70,
                    marginLeft:'45%'
                    // height: "6vh",
                    // width: "8vw",
                  }}
                >
                  More
                </Button>
            </CardActions>
          </Card>
        )
    })
  }

  return (
  <Box component={'div'} style={{marginBottom:'10%',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',}}>
    {showCard()}
  </Box>
  );
}
