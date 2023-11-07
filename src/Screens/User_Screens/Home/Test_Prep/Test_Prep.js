import { Box, Grid, Typography } from "@mui/material";
import Test_PrepButton from "./Buttons/Test_PrepButton";
// import icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ReactComponent as StudentPre } from "../../../../Images/studentPre.svg";
export default function Test_Prep() {
  return (
    <Box>
      <Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "var(--margin-top)",
          }}
        >
          <Typography
            variant="h4"
            style={{
              marginLeft: "5%",
              color: "green",
              fontFamily: "poppins",
              textShadow: "0px 10px 10px #EAD7BB",
            }}
          >
            Test Prep Tutoring
          </Typography>
          <Box
            component={"div"}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "11vw",
              marginTop: "1%",
            }}
          >
            <Typography
              style={{
                fontFamily: "poopins",
                fontWeight: "bold",
                fontSize: 17,
                color: "green",
                textShadow: "0px 10px 10px #EAD7BB",
              }}
            >
              See All
            </Typography>
            <ChevronRightIcon sx={{ color: "green" }} />
          </Box>
        </Box>
        <Box component={'div'} style={{marginTop:'3%'}}>
          <Grid container>
            <Grid item xs={6} style={{paddingTop:'3%'}}>
              <Test_PrepButton />
            </Grid>
            <Grid item xs={4}>
              <StudentPre Size={20} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
