import { Box, Grid } from "@mui/material";
// import Components
import Nav_Bar from "../Home/Nav_Bar/Nav_Bar";
import Left_SideBar from "./Left_SideBar/Left_SideBar";
import Right_SideBar from "./Right_SideBar/Right_SideBar";



export default function Filter() {
  return (
    <Box>
      <Box>
        <Box>
          <Nav_Bar
            display={"none"}
            elevation={4}
            height={"5rem"}
            SearchBar={"flex"}
          />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={3}>
              <Left_SideBar />
            </Grid>
            <Grid item xs={9}>
              <Right_SideBar/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
