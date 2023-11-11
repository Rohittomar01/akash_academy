import { Box, Grid, Typography } from "@mui/material";
// import components
import User_ProfileCard from "./Components/Left_Side";
import TabPanel from "./Components/Right_Side";

export default function user_Account() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{ fontFamily: "poppins", marginLeft: "5%", marginTop: "5%" }}
          >
            Account
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "5%",
          }}
        >
          <User_ProfileCard />
        </Grid>
        <Grid item xs={8}>
          <TabPanel />
        </Grid>
      </Grid>
    </Box>
  );
}
