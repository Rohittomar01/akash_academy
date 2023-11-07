import { Box, Grid, Paper, Typography, Button } from "@mui/material";
// import style
import { AboutStyle } from "./AboutCSS";

export default function About() {
  const classes = AboutStyle();

  return (
    <Box marginTop={"7%"} marginBottom={"10%"}>
      <Grid container>
        <Grid item xs={6}>
          <Box className={classes.paperbox}>
            <Paper
              sx={{ borderRadius: 150, boxShadow: "0 5px 19px var(--cream)" }}
              elevation={4}
              className={classes.paper_01}
            ></Paper>
            <Paper
              sx={{ borderRadius: 150, boxShadow: "0 5px 19px  var(--cream)" }}
              elevation={4}
              className={classes.paper_02}
            ></Paper>
            <Paper
              sx={{ borderRadius: 150, boxShadow: "0 5px 19px var(--cream)" }}
              elevation={4}
              className={classes.paper_03}
            ></Paper>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Box>
              <Typography
                style={{
                  fontSize: 50,
                  fontFamily: "poppins",
                  color: "darkgreen",
                  justifyContent: "center",
                  marginTop:'3%',
                  textShadow:'0px 10px 10px var(--cream)'
                }}
                className={classes.typography_h}
              >
                About us
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  marginTop: "3%",
                  fontFamily: "poppins",
                  textShadow:'0px 10px 10px #EAD7BB'
                }}
                className={classes.typography_p}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
            <Box>
              <Button
                style={{
                  background: "green",
                  color: "white",
                  borderRadius: 70,
                  height: "8vh",
                  width: "10vw",
                  marginTop: "18%",
                  boxShadow: "0 6px 19px  #EAD7BB",
                }}
                variant="contained"
                className={classes.button}
              >
                More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
