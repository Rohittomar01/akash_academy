import { Box, Typography } from "@mui/material";
// import Component
import SeeAllServices_NearYouButton from "./Buttons/SeeAllServices_NearYouButton";
import Nav_Bar from "../Home/Nav_Bar/Nav_Bar";
import Footer from "../User_Components/Footer/Footer";

export default function SeeAllServices_NearYou() {
  return (
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
        <Typography
          variant="h4"
          style={{
            marginTop: "4%",
            marginLeft: "4%",
            fontFamily: "poppins",
            textShadow: "0px 10px 10px var(--cream)",
            textAlign: "center",
          }}
        >
          Services Near Me
        </Typography>
      </Box>
      <Box>
        <SeeAllServices_NearYouButton />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
