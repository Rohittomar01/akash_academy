import { Box, Grid, Paper, Typography, Button } from "@mui/material";
// import style
import { AboutStyle } from "./AboutCSS";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const classes = AboutStyle();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box marginTop={sm?"10%":"7%"} marginBottom={"10%"}>
      <Grid container>
        <Grid item xs={sm ? 5 : 6}>
          <Box className={classes.paperbox}>
            <Paper
              sx={{
                borderRadius: 150,
                boxShadow: "0 5px 19px var(--cream)",
                height: sm ? "45vh" : "70vh",
                width: sm ? "90vw" : "39vw",
                marginLeft: "2%",
                marginTop: "2%",
              }}
              elevation={4}
              className={classes.paper_01}
            ></Paper>
            <Paper
              sx={{
                borderRadius: 150,
                boxShadow: "0 5px 19px  var(--cream)",
                height: sm ? "39vh" : "61vh",
                width: sm ? "79vw" : "35vw",
                marginLeft: sm?"7.5%":"4%",
                marginTop: sm?"7%":"4%",
              }}
              elevation={4}
              className={classes.paper_02}
            ></Paper>
            <Paper
              sx={{
                borderRadius: 150,
                boxShadow: "0 5px 19px var(--cream)",
                height: sm ? "32.5vh" : "52.5vh",
                width: sm ? "71vw" : "31vw",
                marginLeft: sm?"11.5%":"6%",
                marginTop: sm?"12.4%":"6%",
              }}
              elevation={4}
              className={classes.paper_03}
            ></Paper>
          </Box>
        </Grid>
        <Grid item xs={sm ? 11 : 5}>
          <Box
            component={"div"}
            style={{ marginTop: sm ? "50vh" : "", marginLeft: sm ? "7%" : "" }}
          >
            <Box>
              <Typography
                style={{
                  fontSize: sm ? 40 : 50,
                  fontFamily: "poppins",
                  color: "darkgreen",
                  justifyContent: "center",
                  marginTop: "3%",
                  textShadow: "0px 10px 10px var(--cream)",
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
                  textShadow: "0px 10px 10px #EAD7BB",
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
            <Box component={'div'}>
              <Button
                style={{
                  background: "green",
                  color: "white",
                  borderRadius: 70,
                  height:"8vh",
                  width: sm?"35vw":"10vw",
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
