import { Box, Typography } from "@mui/material";
import Near_L_T_Card from "./Near_L_T_Card";
// import icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Near_LanguageTutor() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box>
      <Box>
        <Box style={{ display: "flex", justifyContent: "space-between",marginTop:sm?'15%':"" }}>
          <Typography
            variant={sm ? "h5" : "h4"}
            style={{
              marginLeft: "5%",
              color: "green",
              fontFamily: "poppins",
              textShadow: "0px 10px 10px var(--cream)",
            }}
          >
            Neaby Language Tutors
          </Typography>

          {/* <Box
            component={"div"}
            style={{
              display: "flex",
              flexDirection: "row",
              width: sm ? "35vw" : "11vw",
              marginTop: "1%",
            }}
          >
            <Typography
              style={{
                fontFamily: "poopins",
                fontWeight: "bold",
                fontSize: sm ? 15 : 17,
                color: "green",
                textShadow: "0px 10px 10px var(--cream)",
              }}
            >
              See All
            </Typography>
            <ChevronRightIcon sx={{ color: "green", fontSize: sm ? 20 : "" }} />
          </Box> */}
        </Box>
        <Box>
          <Near_L_T_Card />
        </Box>
      </Box>
    </Box>
  );
}
