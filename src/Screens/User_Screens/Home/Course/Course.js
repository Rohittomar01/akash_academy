import { Box, Typography } from "@mui/material";
import Card from "./Card/Card";
// import icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import navigate
import { useNavigate } from "react-router-dom";

export default function Course() {
  const navigate = useNavigate();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box>
      <Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant={sm ? "h5" : "h4"}
            style={{
              marginLeft: "5%",
              color: "green",
              fontFamily: "poppins",
              textShadow: "0px 10px 10px #EAD7BB",
            }}
          >
            Tutors Near You
          </Typography>

          <Box
            component={"div"}
            style={{
              display: "flex",
              flexDirection: "row",
              width: sm ? "25vw" : "11vw",
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
                cursor: "pointer",
              }}
              onClick={() => navigate("/SeeAllServices_NearYou")}
            >
              See All
            </Typography>
            <ChevronRightIcon
              onClick={() => navigate("/SeeAllServices_NearYou")}
              sx={{ color: "green", fontSize: sm ? 20 : 25 ,cursor:'pointer'}}
            />
          </Box>
        </Box>
        <Box>
          <Card />
        </Box>
      </Box>
    </Box>
  );
}
