import { Box, Grid, Paper, Typography ,Button} from "@mui/material";
// import style
import { About_Style } from "./AboutCSS";

export default function About() {

  const classes = About_Style();

  return (
    <Box marginTop={"10%"} marginBottom={'20%'}>
      <Grid container >
        <Grid item xs={6}>
          <Box className={classes.paperbox}>
            <Paper elevation={4} className={classes.paper_01}></Paper>
            <Paper elevation={4} className={classes.paper_02}></Paper>
            <Paper elevation={4} className={classes.paper_03}></Paper>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Box>
              <Typography className={classes.typography_h}>About us</Typography>
            </Box>
            <Box>
              <Typography className={classes.typography_p}>
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
