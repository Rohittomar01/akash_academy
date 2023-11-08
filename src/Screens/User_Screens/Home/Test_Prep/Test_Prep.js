import { Box, Grid, Typography } from "@mui/material";
import Test_PrepButton from "./Buttons/Test_PrepButton";
// import icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ReactComponent as StudentPre } from "../../../../Images/studentPre.svg";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Test_Prep() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box>
      <Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "var(--margin-top)",
            marginTop:sm?"15%":"",
          }}
        >
          <Typography
            variant={sm ? "h5" : "h4"}
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
              width: sm ? "28vw" : "11vw",
              marginTop: "1%",
            }}
          >
            <Typography
              style={{
                fontFamily: "poopins",
                fontWeight: "bold",
                fontSize: sm ? 15 : 17,
                color: "green",
                textShadow: "0px 10px 10px #EAD7BB",
              }}
            >
              See All
            </Typography>
            <ChevronRightIcon sx={{ color: "green", fontSize: sm ? 20.2 : "" }} />
          </Box>
        </Box>
        <Box component={"div"} style={{ marginTop: "3%" }}>
          <Grid container>
            <Grid item xs={sm?12:6} style={{ paddingTop: "3%" }}>
              {sm?<></>:<><Test_PrepButton /></>}
            </Grid>
            <Grid item xs={sm?12:4}>
            {sm?<><Test_PrepButton /></>:<><StudentPre Size={20} /></>}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
